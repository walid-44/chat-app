import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouters from "./routes/auth.routers.js";
import messageRouters from "./routes/message.routers.js";
import userRouters from "./routes/user.routers.js";
import connectToMongo from "./db/connectToMongo.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouters);
app.use("/api/messages", messageRouters);
app.use("/api/users", userRouters);

app.get("/", (req, res) => {
  res.send("Hello Chats");
});

app.listen(PORT, () => {
  connectToMongo();
  console.log(`server running on port ${PORT}`);
});
