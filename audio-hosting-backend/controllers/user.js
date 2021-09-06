import { asyncHandler } from "../middlewares/async";
import { createNewPlaylist, getSongs } from "../services/dbService";

export const getAllSongs = asyncHandler(async (req, res, next) => {
  // const { userId } = req.user
  const songs = await getSongs()
  res.send(songs)
})

export const createPlaylist = asyncHandler(async (req, res, next) => {
  const { userId } = req.user
  const { songs, name } = req.body

  const list = await createNewPlaylist(userId, name, songs)
  const { __v, owner, ...playlist } = list.toObject();

  res.send(playlist)
})

