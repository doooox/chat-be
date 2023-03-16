import mongoose from "mongoose";
import { IMessage } from "../types/message.types";

const Schema = mongoose.Schema


export const messageSchema = new Schema<IMessage>({
  text: {
    type: String,
    required: true,
    maxlength: [500, "A message can't have more than 500 characters"]
  },
  chatRoom: {
    type: Schema.Types.ObjectId,
    ref: "ChatRoom"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
},
  {
    timestamps: true
  })

export default mongoose.model("Message", messageSchema)
