import { checkSchema } from "express-validator";

const chatRoomValidator = checkSchema({
  name: {
    in: "body",
    notEmpty: true,
    errorMessage: "Chat room name is required",
    isLength: {
      options: { max: 50 },
      errorMessage: "chat room name can't have more than 500 characters"
    }
  }
})

export default chatRoomValidator
