import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import authRouters from "./routes/auth.routers.js";
import messageRouters from "./routes/message.routers.js";
import userRouters from "./routes/user.routers.js";
import connectToMongo from "./db/connectToMongo.js";
import { app, server } from "./socket/socket.js";


const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouters);
app.use("/api/messages", messageRouters);
app.use("/api/users", userRouters);

app.use(express.static(path.join(__dirname, "./frontend/dist")));  


app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"));
});

server.listen(PORT, () => {
  connectToMongo();
  console.log(`server running on port ${PORT}`);
});
