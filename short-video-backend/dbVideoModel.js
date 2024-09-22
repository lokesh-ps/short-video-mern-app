import mongoose from "mongoose";

const shortVideoSchema = mongoose.Schema({
  url: String,
  channel: String,
  description: String,
  song: String,
  likes: Number,
  shares: Number,
  messages: Number,
});

export default mongoose.model("shortVideos", shortVideoSchema);
