import * as express from "express"
import { createChatRoom, getAllRooms, getSingleRoom } from "../../controllers/chatRoomController"

const chatRouter = express.Router()

chatRouter.get("/", getAllRooms)
chatRouter.post("/create", createChatRoom)
chatRouter.get("/:_id", getSingleRoom)

export default chatRouter
