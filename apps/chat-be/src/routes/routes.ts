import * as express from "express"
import authRouter from "./Auth/authRoutes"
import chatRouter from "./Chat/chatRoutes"

const router = express.Router()

router.use("/auth", authRouter)
router.use("/chat", chatRouter)
export default router
