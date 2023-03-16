import * as express from "express"
import { singinUser, singoutUser, singupUser } from "../../controllers/authController"
import { isAuth, isNotAuth } from "../../middleware/Auth/authMiddleware"
import validateRequest from "../../middleware/validation/validationMiddleware"
import singinValidator from "../../validator/Auth/singinValidator"
import singupValidator from "../../validator/Auth/singupValidator"

const authRouter = express.Router()

authRouter.post("/singup", isNotAuth, singupValidator, validateRequest, singupUser)
authRouter.post("/singin", isNotAuth, singinValidator, validateRequest, singinUser)
authRouter.post("/singout", isAuth, singoutUser)
export default authRouter
