import { DEFAULT_PLAYLIST, DEFAULT_LAST_PLAYED_SONG } from "../constants/default_settings";

const keyName = 'player-settings';
const lastPlayedSongKey = "player-last-song"

export const saveLastPlayedPlaylist = (playlistId) => {
  localStorage.setItem(keyName, JSON.stringify(playlistId));
}

export const getLastPlayedPlaylist = () => {
  const lastPlayedPlaylist = localStorage.getItem(keyName)
  if (!lastPlayedPlaylist) return DEFAULT_PLAYLIST

  return JSON.parse(lastPlayedPlaylist);
}

export const saveLastPlayedSong = (song) => {
  localStorage.setItem(lastPlayedSongKey, JSON.stringify(song));
}

export const getLastPlayedSong = () => {
  const lastPlayedSong = localStorage.getItem(lastPlayedSongKey)

  if (!lastPlayedSong) return DEFAULT_LAST_PLAYED_SONG
  return JSON.parse(lastPlayedSong)
}

export const deleteLastPlayedSong = () => {
  localStorage.removeItem(lastPlayedSongKey);
}