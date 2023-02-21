import Express from "express";
import http from "http";
import UserRoutes from "./routes/UserRoutes.js";
import { Server } from "socket.io";


const port = 8888;
const app = Express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  socket.emit("UserConnected", "A user connected");
  socket.on("connected", () => {
    console.log("A user connected");
  });
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log(`message: ` + msg);
  });
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

app.set("view engine", "pug");

app.set("views", "./views");

app.use(Express.static("public"));

app.use("/", UserRoutes);

server.listen(port, () => {
  console.log("Listening on port " + port);
});
