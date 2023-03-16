import { IMessage } from "./message.types";

export interface IUser {
  id: string,
  username: string,
  email: string,
  password: string,
  isAdmin?: boolean,
  messages: IMessage[]
}
