import { Request, Response } from 'express';
import { responseMessage } from '../utils/helpers';
import User from '../models/userModel';
import { compare, genSalt, hash } from 'bcrypt';
import jwt = require('jsonwebtoken');
import { Types } from 'mongoose';

const generateToken = (id: Types.ObjectId, email: string, username: string) => {
  return jwt.sign({ id, email, username }, process.env.NX_JWT_SECRET, {
    expiresIn: '1d',
  });
};

export const singupUser = async (req: Request, res: Response) => {
  const { email, username, password, confirmPassword } = req.body;
  console.log(process.env.NX_JWT_SECRET);

  if (password !== confirmPassword)
    return responseMessage(400, res, "Passwords don't match!");

  const usernameExists = await User.exists({ username });
  const emailExists = await User.exists({ email });

  if (usernameExists || emailExists)
    return responseMessage(403, res, 'User already registered!');

  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    return res.status(201).json({
      id: user._id,
      isAdmin: user.isAdmin,
      token: generateToken(user._id, user.email, user.username),
    });
  }

  responseMessage(400, res, 'Invalid user data');
};

export const singinUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return responseMessage(404, res, 'Invalid email or password');

  const matchingPasswords = await compare(password, user.password);

  if (!matchingPasswords)
    return responseMessage(400, res, 'Invalid username or password');

  if (user) {
    return res.status(201).json({
      id: user.id,
      isAdmin: user.isAdmin,
      token: generateToken(user._id, user.email, user.username),
    });
  }
};

export const singoutUser = async (req: Request, res: Response) => {
  const userId = req.user.id;
  try {
    const user = await User.findByIdAndUpdate(userId, { token: null });
    if (!user) throw new Error('User not found');
    res.status(200).json({ message: 'Logout successful' });
  } catch (err) {
    console.error(err);
    responseMessage(500, res, 'Server error');
  }
};
