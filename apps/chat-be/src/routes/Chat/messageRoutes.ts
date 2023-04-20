import * as express from "express"
import { createMessages, getMessages } from "../../controllers/messagesController"
import validateRequest from "../../middleware/validation/validationMiddleware"
import messageValidator from "../../validator/Chat/messageValidatro"


const messageRouter = express.Router()

messageRouter.get("/:chatRoom", getMessages)
messageRouter.post("/create/:chatRoom", messageValidator, validateRequest, createMessages)


export default messageRouter
