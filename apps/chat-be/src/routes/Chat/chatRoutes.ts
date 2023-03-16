import * as express from "express"
import { createChatRoom, getAllRooms, getSingleRoom } from "../../controllers/chatRoomController"
import { isAdmin, isAuth } from "../../middleware/Auth/authMiddleware"
import validateRequest from "../../middleware/validation/validationMiddleware"
import chatRoomValidator from "../../validator/Chat/chatRoomValidatro"

const chatRouter = express.Router()

chatRouter.get("/", isAuth, getAllRooms)
chatRouter.post("/create", isAuth, isAdmin, chatRoomValidator, validateRequest, createChatRoom)
chatRouter.get("/:_id", isAuth, getSingleRoom)

export default chatRouter
