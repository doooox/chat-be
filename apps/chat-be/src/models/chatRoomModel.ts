import mongoose from "mongoose";
import { IChatRoom } from "../types/chatRoom.types";


const Schema = mongoose.Schema;

const charRoomSchema = new Schema<IChatRoom>({
  name: {
    type: String,
    required: true,
    unique: true,
    maxlength: [500, "Comment can't have more than 500 characters"]
  },

})

export default mongoose.model("ChatRoom", charRoomSchema)
