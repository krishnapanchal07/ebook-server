import { error } from "console";
import mongoose, { mongo } from "mongoose";

const uri = process.env.MONGO_URI;

if (!uri) throw new Error("Database uri is missing!");

export const dbConnect = () => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("db is connected");
    })
    .catch((error) => {
      console.log("db connection failed", error.message);
    });
};