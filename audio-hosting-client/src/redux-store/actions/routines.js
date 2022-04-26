import { createRoutine } from "../../utils/createRoutine"

import { 
  LOGIN,
  REGISTER,
  SILENT_LOGIN,
  CREATE_NEW_PLAYLIST,
  EDIT_PLAYLIST,
  UPLOAD_TRACK,
  SAVE_USER_SETTINGS,
  SAVE_PLAYER_SETTINGS,
 } from "./types"

export const loginRoutine = createRoutine(LOGIN)
export const registerRoutine = createRoutine(REGISTER)
export const silentLoginRoutine = createRoutine(SILENT_LOGIN)

export const createNewPlaylistRoutine = createRoutine(CREATE_NEW_PLAYLIST)
export const editPlaylistRoutine = createRoutine(EDIT_PLAYLIST)

export const uploadTrackRoutine = createRoutine(UPLOAD_TRACK)

export const saveUserSettingsRoutine = createRoutine(SAVE_USER_SETTINGS)
export const savePlayerSettingsRoutine = createRoutine(SAVE_PLAYER_SETTINGS)

const routines = {
  [loginRoutine.REQUEST]: loginRoutine,
  [registerRoutine.REQUEST]: registerRoutine,
  [silentLoginRoutine.REQUEST]: silentLoginRoutine,
  [createNewPlaylistRoutine.REQUEST]: createNewPlaylistRoutine,
  [editPlaylistRoutine.REQUEST]: editPlaylistRoutine,
  [uploadTrackRoutine.REQUEST]: uploadTrackRoutine,
  [saveUserSettingsRoutine.REQUEST]: saveUserSettingsRoutine,
  [savePlayerSettingsRoutine.REQUEST]: savePlayerSettingsRoutine,
}

export default routines