import { Schema } from "mongoose";

export interface IMessage {
  _id: string,
  text: string,
  chatRoom: Schema.Types.ObjectId,
  user: Schema.Types.ObjectId
}
