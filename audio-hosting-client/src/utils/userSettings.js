import { DEFAULT_PLAYLIST, DEFAULT_VOLUME, DEFAULT_REMEMBER_LAST_SONG, DEFAULT_LAST_PLAYED_SONG } from "../constants/default_settings";

const keyName = 'player-settings';
const lastPlayedSongKey = "player-last-song"

export const saveLocalSettings = (settings) => {
  localStorage.setItem(keyName, JSON.stringify(settings));
}

export const getLocalSettings = () => {
  const userSettings = localStorage.getItem(keyName)
  const lastPlayedSong = getLastPlayedSong(lastPlayedSongKey)

  if (!userSettings) return {
      defaultPlaylist: DEFAULT_PLAYLIST,
      defaultVolume: DEFAULT_VOLUME,
      rememberLastSong: DEFAULT_REMEMBER_LAST_SONG,
      lastPlayedSong: lastPlayedSong
    };

  return JSON.parse(userSettings);
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