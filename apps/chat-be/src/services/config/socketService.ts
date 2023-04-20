import { createServer } from "http";
import { Server } from "socket.io";

export const socket = (app) => {

  const httpServer = createServer(app);
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  });

  io.on("connection", (socket) => {
    socket.join("message-room")
    socket.on("message-added", ({ chatRoom }) => {
      socket.broadcast.to(chatRoom).emit("new-message", { message: "A new message has been added to the chat room" });
      socket.to("message-room").emit("message-added")
    })

  });
  const port = Number(process.env.NX_PORT) + 1;

  httpServer.listen(port);
}
