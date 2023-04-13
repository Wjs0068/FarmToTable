import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import farmerRouter from "./routes/farmer.js";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/farmer", farmerRouter);

mongoose.connect(process.env.MONGO_CLIENT);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
