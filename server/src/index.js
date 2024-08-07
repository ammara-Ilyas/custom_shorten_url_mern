import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToMongoDB } from "./db.js";

import router from "../route/url.js";

const app = express();

dotenv.config();
const url = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

const startServer = async () => {
  try {
    await connectToMongoDB(url);
    app.listen(PORT, () => {
      console.log("Server running at port", PORT);
    });
  } catch (error) {
    console.error("Failed to start server", error);
  }
};

startServer();
