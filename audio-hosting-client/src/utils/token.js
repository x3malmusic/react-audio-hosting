const appName = 'react-audio-player';

export const saveToken = (player) => {
  localStorage.setItem(appName, JSON.stringify(player));
}

export const getToken = () => {
  return JSON.parse(localStorage.getItem(appName));
}

export const deleteToken = () => {
  localStorage.removeItem(appName);
}