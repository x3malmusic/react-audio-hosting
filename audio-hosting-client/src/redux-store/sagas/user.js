import { takeLatest, put, select } from "redux-saga/effects";
import { notify } from "../../utils/notifications";
import {
  SET_SONGS,
  SET_USER,
  LOG_OUT,
  CLEAR_USER,
  INIT_PLAYER,
  SET_PLAYLIST,
  SET_PLAYER_SETTINGS
} from "../actions/types";
import { 
  silentLoginRoutine,
  loginRoutine,
  registerRoutine,
  uploadTrackRoutine,
  saveUserSettingsRoutine,
  createNewPlaylistRoutine,
  editPlaylistRoutine,
 } from "../actions/routines";
import { safe } from "./error";
import {
  uploadSong,
  register,
  login,
  silentLogin,
  createPlaylist,
  saveUserSettings,
  editPlaylist
} from "../../services/http";
import { saveToken, deleteToken } from "../../utils/token";
import { arrayToMap } from "../../utils";
import {
  messages,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  LOGOUT_SUCCESS,
  UPLOAD_SUCCESS,
  PLAYLIST_CREATED,
  SETTINGS_SAVE_SUCCESS
} from "../../constants/messages";

const registerUser = function* ({ payload }) {
  const { user, token }  = yield register(payload);
  const { settings, ...userData } = user

  saveToken(token)
  yield put({ type: SET_USER, payload: { ...userData, songs: arrayToMap(userData.songs) }})
  yield put({ type: SET_PLAYER_SETTINGS, payload: settings })

  notify(messages[REGISTER_SUCCESS])
};

const loginUser = function* ({ payload }) {
  const { user, token } = yield login(payload);
  const { settings, ...userData } = user

  saveToken(token)

  yield put({ type: SET_USER, payload: { ...userData, songs: arrayToMap(userData.songs) }})
  yield put({ type: SET_PLAYER_SETTINGS, payload: settings })
  yield put({ type: INIT_PLAYER })

  notify(messages[LOGIN_SUCCESS])
};

const silentLoginUser = function* () {
  const data = yield silentLogin();
  const { settings , ...user } = data

  yield put({ type: SET_USER, payload: {...user, songs: arrayToMap(user.songs)} })
  yield put({ type: SET_PLAYER_SETTINGS, payload: settings })
  yield put({ type: INIT_PLAYER })

  notify(messages[LOGIN_SUCCESS])
};

const logoutUser = function* () {
  deleteToken();
  yield put({ type: CLEAR_USER })
  notify(messages[LOGOUT_SUCCESS])
};

const uploadTrack = function* ({ payload }) {
  const data = new FormData();
  data.append('song', payload.file);
  const song = yield uploadSong({ file: data, setUploadProgress: payload.setUploadProgress });

  const allSongs = yield select(state => state.user.songs);
  allSongs[song._id] = song

  payload.setUploadProgress(0)

  yield put({ type: SET_SONGS, payload: { ...allSongs } });
  notify(messages[UPLOAD_SUCCESS])
};

const createNewPlaylist = function* () {
  const { songs, name } = yield select(state => state.newPlaylist.songs);

  const playlist = yield createPlaylist({ name, songs });

  const user = yield select(state => state.user)
  user.playlists = [...user.playlists, playlist]

  yield put({ type: SET_USER, payload: { ...user } })
  notify(messages[PLAYLIST_CREATED])
};

const saveSettings = function* ({ payload }) {
  const user = yield saveUserSettings(payload);
  yield put({ type: SET_USER, payload: user });
  notify(messages[SETTINGS_SAVE_SUCCESS])
};

const editUserPlaylist = function* () {
  const { currentPlaylist: playlistId, songsInPlaylist } = yield select(state => state.player)

  const playlist = yield editPlaylist({ playlistId, songsInPlaylist });

  const { playlists: userPlaylists } = yield select(state => state.user);
  const newPlaylists = yield userPlaylists.map(list => {
    if (list._id === playlistId) return playlist
    return list
  })

  yield put({ type: SET_PLAYLIST, payload: newPlaylists })
  notify(messages[SETTINGS_SAVE_SUCCESS])
};

const userSagas = [
  takeLatest(uploadTrackRoutine.REQUEST, safe(uploadTrack)),
  takeLatest(registerRoutine.REQUEST, safe(registerUser)),
  takeLatest(loginRoutine.REQUEST, safe(loginUser)),
  takeLatest(silentLoginRoutine.REQUEST, safe(silentLoginUser)),
  takeLatest(LOG_OUT, logoutUser),
  takeLatest(createNewPlaylistRoutine.REQUEST, safe(createNewPlaylist)),
  takeLatest(saveUserSettingsRoutine.REQUEST, safe(saveSettings)),
  takeLatest(editPlaylistRoutine.REQUEST, safe(editUserPlaylist)),
];

export default userSagas;
