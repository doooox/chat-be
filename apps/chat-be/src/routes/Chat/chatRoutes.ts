import * as express from "express"
import { createChatRoom, getAllRooms, getSingleRoom } from "../../controllers/chatRoomController"

import validateRequest from "../../middleware/validation/validationMiddleware"
import chatRoomValidator from "../../validator/Chat/chatRoomValidatro"

const chatRouter = express.Router()

chatRouter.get("/", getAllRooms)
chatRouter.post("/create", chatRoomValidator, validateRequest, createChatRoom)
chatRouter.get("/:_id", getSingleRoom)

export default chatRouter
