import { Request, Response } from "express";
import { responseMessage } from "../utils/helpers";
import User from "../models/userModel"
import { compare, genSalt, hash } from "bcrypt"

export const singupUser = async (req: Request, res: Response) => {
  const { email, username, password, confirmPassword } = req.body

  if (password !== confirmPassword) return responseMessage(400, res, "Passwords don't match!")

  const usernameExists = await User.exists({ username })
  const emailExists = await User.exists({ email })

  if (usernameExists || emailExists) return responseMessage(403, res, "User already registerd!")

  const salt = await genSalt(10)
  const hashedPassword = await hash(password, salt)

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  })

  if (user) {
    req.session.user = {
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin
    }
  }
  if (user) {
    return res.status(201).json({
      username: user.username,
      email: user.email
    })
  }

  responseMessage(400, res, "Invalid user data");
}

export const singinUser = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })


  if (!user) return responseMessage(404, res, "Invalid email or password")

  const matchingPasswords = await compare(password, user.password);

  if (!matchingPasswords) return responseMessage(400, res, "Invalid username or password")

  if (user) {
    req.session.user = {
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin
    }
  }
  return res.status(201).json({
    username: user.username,
    email: user.email,
    isAdmin: user.isAdmin
  })

}

export const singoutUser = async (req: Request, res: Response) => {
  req.session.destroy((error) => {
    if (error) return responseMessage(400, res, "Unable to log out")
    res.status(200).json({ message: "User is logged out" })
  })
}
