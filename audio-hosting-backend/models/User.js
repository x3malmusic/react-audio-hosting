import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: [true, "name is required"], unique: true },
  name: { type: String, default: "" },
  password: { type: String, required: [true, "password is required"]},
  playlists: [{ type: mongoose.Types.ObjectId, ref: "Playlist" }],
  songs: [{ type: mongoose.Types.ObjectId, ref: "Song" }],
  defaultPlaylist: { type: mongoose.Types.ObjectId, ref: "Song", default: "" },
  defaultVolume: { type: Number, default: 50 },
  autoplay: { type: Boolean, default: false },
});

export const User = model("User", userSchema);
