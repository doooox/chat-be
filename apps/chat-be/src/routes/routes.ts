import * as express from "express"
import authRouter from "./Auth/authRoutes"

const router = express.Router()

router.use("/auth", authRouter)
export default router
