export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const UPLOAD_SUCCESS = "UPLOAD_SUCCESS"
export const PLAYLIST_CREATED = "PLAYLIST_CREATED"
export const SETTINGS_SAVE_SUCCESS = "SETTINGS_SAVE_SUCCESS"

export const messages = {
  [LOGIN_SUCCESS]: { message: "Successfully logged in", type: 'success', title: 'Welcome' },
  [REGISTER_SUCCESS]: { message: "Successfully registered", type: 'success', title: 'Welcome' },
  [LOGOUT_SUCCESS]: { message: "Logged out", type: 'success', title: 'Good bye' },
  [UPLOAD_SUCCESS]: { message: "Track uploaded", type: 'success', title: 'Success' },
  [PLAYLIST_CREATED]: { message: "Playlist created", type: 'success', title: 'Success' },
  [SETTINGS_SAVE_SUCCESS]: { message: "Saved", type: 'success', title: 'Success' },
}