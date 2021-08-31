import mongoose, { Schema, model } from "mongoose";

const songSchema = new Schema({
  original_filename: { type: String },
  bit_rate: { type: Number },
  duration: { type: Number },
  url: { type: String },
  bytes: { type: Number },
  owner: { type: mongoose.Types.ObjectId, ref: "User" },
});

export const Song = model("Song", songSchema);
