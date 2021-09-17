import { asyncHandler } from "../middlewares/async";
import { createNewPlaylist, saveUserSettings, editUserPlaylist, saveUserPlayerSettings } from "../services/dbService";

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

export const savePlayerSettings = asyncHandler(async (req, res, next) => {
  const { userId } = req.user
  const { defaultVolume, rememberLastSong } = req.body

  const data = await saveUserPlayerSettings(userId, { defaultVolume, rememberLastSong  })
  const { __v, owner, ...settings } = data.toObject();

  res.send(settings)
})

export const editPlaylist = asyncHandler(async (req, res, next) => {
  const { playlistId, songsInPlaylist } = req.body

  const data = await editUserPlaylist(playlistId, songsInPlaylist)
  const playlist = data.toObject();

  res.send(playlist)
})

