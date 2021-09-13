import { DEFAULT_PLAYLIST, DEFAULT_VOLUME } from "../constants/default_settings";

const keyName = 'player-settings';

export const saveLocalSettings = (settings) => {
  localStorage.setItem(keyName, JSON.stringify(settings));
}

export const getLocalSettings = () => {
  const userSettings = localStorage.getItem(keyName)

  if (!userSettings) return {
    defaultPlaylist: DEFAULT_PLAYLIST,
    defaultVolume: DEFAULT_VOLUME
  };

  return JSON.parse(userSettings);
}