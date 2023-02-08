import * as express from "express"
import { singinUser, singoutUser, singupUser } from "../../controllers/authController"

const authRouter = express.Router()

authRouter.post("/singup", singupUser)
authRouter.post("/singin", singinUser)
authRouter.post("/singout", singoutUser)
export default authRouter
