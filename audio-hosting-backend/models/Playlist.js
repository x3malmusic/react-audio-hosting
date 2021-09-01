import mongoose, { Schema, model } from "mongoose";

const playlistSchema = new Schema({
  owner: { type: mongoose.Types.ObjectId, ref: "User" },
  songs: [{ type: mongoose.Types.ObjectId, ref: "Song" }],
});

export const Playlist = model("Playlist", playlistSchema);
