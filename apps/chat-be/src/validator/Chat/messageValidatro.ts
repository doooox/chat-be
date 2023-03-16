import { checkSchema } from "express-validator";

const messageValidator = checkSchema({
  text: {
    in: "body",
    notEmpty: true,
    errorMessage: "Message is required",
    isLength: {
      options: { max: 500 },
      errorMessage: "A message can't have more than 500 characters"
    }
  }
})

export default messageValidator
