import * as express from "express"
import { createMessages, getMessages } from "../../controllers/messagesController"


const messageRouter = express.Router()

messageRouter.get("/:chatRoom", getMessages)
messageRouter.post("/create/:chatRoom", createMessages)


export default messageRouter
