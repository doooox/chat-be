import * as express from 'express';
import {
  createMessages,
  getMessages,
} from '../../controllers/messagesController';
import validateRequest from '../../middleware/validation/validationMiddleware';
import messageValidator from '../../validator/Chat/messageValidatro';
import { authMiddleware } from '../../middleware/Auth/authMiddleware';

const messageRouter = express.Router();

messageRouter.get('/:chatRoom', getMessages);
messageRouter.post(
  '/create/:chatRoom',
  messageValidator,
  validateRequest,
  authMiddleware,
  createMessages
);

export default messageRouter;
