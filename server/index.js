import express from "express";
import mongoose from "mongoose";
const app = express();
import { router as bookRouter } from "./routes/bookRoutes.js";
import * as dotenv from "dotenv";
import cors from "cors";
dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/books", bookRouter);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connect Success");
    app.listen(process.env.PORT, () => {
      console.log("Server running...");
    });
  })
  .catch((err) => console.log(err));
