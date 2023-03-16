import * as express from "express"
import { createMessages, getMessages } from "../../controllers/messagesController"
import { isAuth } from "../../middleware/Auth/authMiddleware"
import validateRequest from "../../middleware/validation/validationMiddleware"
import messageValidator from "../../validator/Chat/messageValidatro"


const messageRouter = express.Router()

messageRouter.get("/:chatRoom", isAuth, getMessages)
messageRouter.post("/create/:chatRoom", isAuth, messageValidator, validateRequest, createMessages)


export default messageRouter
