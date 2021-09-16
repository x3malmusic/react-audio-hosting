import { takeLatest, put, select } from "redux-saga/effects";
import { notify } from "../../utils/notifications";
import {
  SET_SONGS,
  UPLOAD_TRACK,
  SET_USER,
  REGISTER,
  LOGIN,
  SILENT_LOGIN,
  LOG_OUT,
  CREATE_NEW_PLAYLIST,
  SAVE_USER_SETTINGS,
  CLEAR_USER,
  INIT_PLAYER,
  EDIT_PLAYLIST,
  SET_PLAYLIST,
} from "../actions/types";
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
  const data = yield register(payload);

  saveToken(data.token)
  yield put({ type: SET_USER, payload: {...data.user, songs: arrayToMap(data.user.songs)} })

  notify(messages[REGISTER_SUCCESS])
};

const loginUser = function* ({ payload }) {
  const data = yield login(payload);

  saveToken(data.token)

  yield put({ type: SET_USER, payload: {...data.user, songs: arrayToMap(data.user.songs)}})
  yield put({ type: INIT_PLAYER })

  notify(messages[LOGIN_SUCCESS])
};

const silentLoginUser = function* () {
  const data = yield silentLogin();

  yield put({ type: SET_USER, payload: {...data, songs: arrayToMap(data.songs)} })
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
  takeLatest(UPLOAD_TRACK, safe(uploadTrack)),
  takeLatest(REGISTER, safe(registerUser)),
  takeLatest(LOGIN, safe(loginUser)),
  takeLatest(SILENT_LOGIN, safe(silentLoginUser)),
  takeLatest(LOG_OUT, safe(logoutUser)),
  takeLatest(CREATE_NEW_PLAYLIST, safe(createNewPlaylist)),
  takeLatest(SAVE_USER_SETTINGS, safe(saveSettings)),
  takeLatest(EDIT_PLAYLIST, safe(editUserPlaylist)),
];

export default userSagas;
