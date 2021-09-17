import mongoose, { Schema, model } from "mongoose";

const settingsSchema = new Schema({
  defaultVolume: { type: String, default: 50 },
  rememberLastSong: { type: Boolean, default: false },
  owner: { type: mongoose.Types.ObjectId, ref: "User" },
});

export const Settings = model("Settings", settingsSchema);