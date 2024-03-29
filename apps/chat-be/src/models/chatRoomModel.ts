import mongoose from "mongoose";
import { IChatRoom } from "../types/chatRoom.types";


const Schema = mongoose.Schema;

const charRoomSchema = new Schema<IChatRoom>({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: [50, "Chat room name can't have more than 50 characters"]
  },
  messages: [{
    type: Schema.Types.ObjectId,
    ref: "Message"
  }],
},
  {
    timestamps: true
  })

export default mongoose.model("ChatRoom", charRoomSchema)
