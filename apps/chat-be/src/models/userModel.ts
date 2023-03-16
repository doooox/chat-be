import mongoose from "mongoose";
import { IUser } from "../types/user.types";

const Schema = mongoose.Schema;

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    min: [2, 'Username must contain at least 2 characters'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  messages: [{
    type: Schema.Types.ObjectId,
    ref: "Message"
  }],
}, {
  timestamps: true
})

export default mongoose.model("User", userSchema)
