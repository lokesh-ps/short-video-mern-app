import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import Videos from "./dbVideoModel.js";

const app = express();
const port = process.env.PORT || 9000;
const connection_url =
  "mongodb+srv://lokeshpspsl522:d2fADhdtDcXpOtUo@cluster0.zkvbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(connection_url, {})
  .then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
app.use(express.json());
app.use(Cors());
app.get("/", (req, res) => {
  res.status(200).send("Hello TheWebDev");
});
app.post("/v2/posts", async (req, res) => {
  console.log("Videos", Videos);
  const dbVideos = req.body;
  console.log("dbVideos", dbVideos);
  try {
    const data = await Videos.create(dbVideos);
    console.log("data", data);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.get("/v2/posts", async (req, res) => {
  try {
    let data = await Videos.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.listen(port, () => {
  console.log(`Listening localhost on Port ${port}`);
});
