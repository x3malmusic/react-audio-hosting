import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: [true, "name is required"], unique: true },
  name: { type: String },
  password: { type: String, required: [true, "password is required"] },
  songs: { type: mongoose.Types.ObjectId, ref: "Song" },
});

export const User = model("User", userSchema);
