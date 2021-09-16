import { asyncHandler } from "../middlewares/async";
import { createNewPlaylist, getSongs, saveUserSettings, editUserPlaylist } from "../services/dbService";

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

export const saveSettings = asyncHandler(async (req, res, next) => {
  const { userId } = req.user
  const { name } = req.body

  const data = await saveUserSettings(userId, { name })
  const { __v, password, playlists, songs, email, ...user} = data.toObject();

  res.send(user)
})

export const editPlaylist = asyncHandler(async (req, res, next) => {
  const { playlistId, songsInPlaylist } = req.body

  const data = await editUserPlaylist(playlistId, songsInPlaylist)
  const playlist = data.toObject();

  res.send(playlist)
})

