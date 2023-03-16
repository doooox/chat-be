import { IMessage } from "./message.types";

export interface IChatRoom {
  _id: string,
  name: string,
  messages?: IMessage[]
}
