import { Request, Response } from "express";
import Message from "../models/messageModel"
import ChatRoom from "../models/chatRoomModel"
import { responseMessage } from "../utils/helpers";

export const getMessages = async (req: Request, res: Response) => {
  const { chatRoom } = req.params

  if (!chatRoom) return responseMessage(400, res, "No chat room ID foun")

  const messageQuery = Message.find({ chatRoom: req.params.chatRoom }).populate("user")

  const messages = await messageQuery

  if (messages) return res.status(200).json(messages)

  responseMessage(400, res, "No messages found")

}

export const createMessages = async (req: Request, res: Response) => {
  const { text } = req.body
  const { chatRoom } = req.params
  const { _id } = req.session.user

  if (!chatRoom) return responseMessage(400, res, "No chat room ID foun")

  console.log("Did I Get Here?");
  const room = await ChatRoom.findById(chatRoom)

  if (!room) return responseMessage(200, res, "Chat room not found")

  const message = await Message.create({
    text,
    chatRoom,
    user: _id
  })

  console.log("second log", message);

  room.messages.push(message)
  room.save()
  await message.populate("user")
  console.log("Did I Get Here?");
  if (message) return res.status(200).json(message)

}
