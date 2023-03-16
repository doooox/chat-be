import * as express from "express"
import authRouter from "./Auth/authRoutes"
import chatRouter from "./Chat/chatRoutes"
import messageRouter from "./Chat/messageRoutes"

const router = express.Router()

router.use("/auth", authRouter)
router.use("/chat", chatRouter)
router.use("/message", messageRouter)
export default router
