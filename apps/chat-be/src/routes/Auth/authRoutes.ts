import * as express from 'express';
import {
  singinUser,
  singoutUser,
  singupUser,
} from '../../controllers/authController';
import { authMiddleware } from '../../middleware/Auth/authMiddleware';
import validateRequest from '../../middleware/validation/validationMiddleware';
import singinValidator from '../../validator/Auth/singinValidator';
import singupValidator from '../../validator/Auth/singupValidator';

const authRouter = express.Router();

authRouter.post('/signup', singupValidator, validateRequest, singupUser);
authRouter.post('/signin', singinValidator, validateRequest, singinUser);
authRouter.post('/signout', authMiddleware, singoutUser);
export default authRouter;
