import { checkSchema } from "express-validator"

const singupValidator = checkSchema({
  email: {
    in: "body",
    isEmail: true,
    errorMessage: "Input must have a value of email"
  },
  username: {
    in: "body",
    notEmpty: true,
    errorMessage: "Username is required!"
  },
  password: {
    in: "body",
    isLength: {
      options: { min: 6 },
      errorMessage: "Password must have at least 6 chars!"
    }
  },
})

export default singupValidator
