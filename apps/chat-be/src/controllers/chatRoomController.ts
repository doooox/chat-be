import { Request, Response } from "express";
import ChatRoom from "../models/chatRoomModel";
import { responseMessage } from "../utils/helpers";

export const getAllRooms = async (req: Request, res: Response) => {

  const chatRooms = await ChatRoom.find({})

  if (chatRooms) return res.status(200).json(chatRooms)

  responseMessage(400, res, "No chat roomes found")
}


export const getSingleRoom = async (req: Request, res: Response) => {
  const { _id } = req.params

  const singleRoom = await ChatRoom.findOne({ _id })

  if (singleRoom) return res.status(200).json(singleRoom)

  responseMessage(404, res, "No Room with that id")
}

export const createChatRoom = async (req: Request, res: Response) => {
  const { name } = req.body

  const roomExists = await ChatRoom.findOne({ name })

  if (roomExists) responseMessage(403, res, "Room already exists")

  const chatRoom = await ChatRoom.create({
    name
  })

  if (chatRoom) return res.status(201).json(chatRoom)
  responseMessage(400, res, "Invalid data")
}
