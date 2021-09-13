import { put, select, takeLatest } from "redux-saga/effects";
import {
  CHANGE_SONG,
  SET_CURRENT_PLAYLIST,
  SET_CURRENT_SONG,
  SET_SONGS_IN_PLAYLIST,
  PLAY_NEXT_SONG,
  PLAY_PREVIOUS_SONG,
  REORDER_SONGS_IN_PLAYLIST,
  SAVE_PLAYER_SETTINGS,
  SET_USER,
  INIT_PLAYER
} from "../actions/types";
import { saveLocalSettings } from "../../utils/userSettings";
import { recalcNextAndPrevSongs } from "../../utils";
import { notify } from "../../utils/notifications";
import { messages, SETTINGS_SAVE_SUCCESS } from "../../constants/messages";


const setCurrentSong = function* ({ payload }) {
  const songs = yield select(state => state.player.songsInPlaylist);
  const { currentSong, nextSong, previousSong } = yield recalcNextAndPrevSongs(payload, songs)
  yield put({ type: CHANGE_SONG, payload: { currentSong, nextSong, previousSong }});
};

const changePlaylist = function* ({ payload }) {
  const playlists = yield select(state => state.user.playlists);
  const songsOfPlaylist = yield playlists.find(list => list._id === payload);

  yield put({ type: SET_SONGS_IN_PLAYLIST, payload: [...songsOfPlaylist.songs] });
  yield put({ type: SET_CURRENT_SONG, payload: songsOfPlaylist.songs[0] });
};

const playNext = function* () {
  const nextSong = yield select(state => state.player.nextSong);
  yield put({ type: SET_CURRENT_SONG, payload: nextSong });
};

const playPrevious = function* () {
  const prevSong = yield select(state => state.player.previousSong);
  yield put({ type: SET_CURRENT_SONG, payload: prevSong });
};

const recalcNextAndPreviousSongs = function* ({ payload }) {
  const currentSong = yield select(state => state.player.currentSong);

  yield put({ type: SET_SONGS_IN_PLAYLIST, payload: payload });
  yield put({ type: SET_CURRENT_SONG, payload: currentSong });
}

const savePlayerSettings = function* ({ payload }) {
  saveLocalSettings(payload)
  yield put({ type: SET_USER, payload });
  notify(messages[SETTINGS_SAVE_SUCCESS])
}

const initPlayer = function* () {
  const player = yield select(state => state.player)

  if (player.defaultPlaylist) yield put({ type: SET_CURRENT_PLAYLIST, payload: player.defaultPlaylist })
}

const playerSagas = [
  takeLatest(SET_CURRENT_SONG, setCurrentSong),
  takeLatest(SET_CURRENT_PLAYLIST, changePlaylist),
  takeLatest(PLAY_NEXT_SONG, playNext),
  takeLatest(PLAY_PREVIOUS_SONG, playPrevious),
  takeLatest(REORDER_SONGS_IN_PLAYLIST, recalcNextAndPreviousSongs),
  takeLatest(SAVE_PLAYER_SETTINGS, savePlayerSettings),
  takeLatest(INIT_PLAYER, initPlayer),
];

export default playerSagas;