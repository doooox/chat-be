import { checkSchema } from "express-validator"

const singinValidator = checkSchema({
  email: {
    in: "body",
    isEmail: true,
    errorMessage: "Entered value must be a valid e-mail"
  },
  password: {
    in: "body",
    notEmpty: true,
    errorMessage: "Password is requiered"
  }
})


export default singinValidator
