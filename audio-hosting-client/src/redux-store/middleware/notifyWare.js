import {
  messages,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGOUT_SUCCESS,
  UPLOAD_SUCCESS,
  PLAYLIST_CREATED,
  SETTINGS_SAVE_SUCCESS
} from "../../constants/messages";
import { 
  loginRoutine,
  logoutRoutine,
  silentLoginRoutine,
  registerRoutine,
  uploadTrackRoutine,
  createNewPlaylistRoutine,
  editPlaylistRoutine,
  saveUserSettingsRoutine,
  savePlayerSettingsRoutine,
 } from "../actions/routines";
 import { notify } from "../../utils/notifications";


 const routineToMessage = {
  [silentLoginRoutine.SUCCESS]: LOGIN_SUCCESS,
  [loginRoutine.SUCCESS]: LOGIN_SUCCESS,
  [logoutRoutine.SUCCESS]: LOGOUT_SUCCESS,
  [registerRoutine.SUCCESS]: REGISTER_SUCCESS,
  [uploadTrackRoutine.SUCCESS]: UPLOAD_SUCCESS,
  [createNewPlaylistRoutine.SUCCESS]: PLAYLIST_CREATED,
  [editPlaylistRoutine.SUCCESS]: SETTINGS_SAVE_SUCCESS,
  [saveUserSettingsRoutine.SUCCESS]: SETTINGS_SAVE_SUCCESS,
  [savePlayerSettingsRoutine.SUCCESS]: SETTINGS_SAVE_SUCCESS,
 }

 const findMessageByActionType = (actionType) => {
   return routineToMessage[actionType]
 }

export const notifyWare = () => {
  return next => action => {
    const message = findMessageByActionType(action.type)
    if (message) notify(messages[message])

    return next(action)
  }
}