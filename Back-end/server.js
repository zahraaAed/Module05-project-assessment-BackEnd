import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser';

import productRoutes from "./Routes/productRoute.js";
import userRoutes from "./Routes/userRoute.js";
import orderRoute from "./Routes/orderRoute.js";
dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());



// Routes
app.use("/images", express.static("images"));
app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);
app.use("/api/order",orderRoute)
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`DB connected and Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to the database:", err);
  });
