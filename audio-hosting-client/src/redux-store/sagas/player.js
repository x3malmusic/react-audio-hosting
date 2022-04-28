import { put, select, takeLatest } from "redux-saga/effects";
import {
  CHANGE_SONG,
  SET_CURRENT_PLAYLIST,
  SET_CURRENT_SONG,
  SET_SONGS_IN_PLAYLIST,
  PLAY_NEXT_SONG,
  PLAY_PREVIOUS_SONG,
  REORDER_SONGS_IN_PLAYLIST,
  INIT_PLAYER,
  INIT_PLAYER_END,
  SET_PLAYER_SETTINGS
} from "../actions/types";
import { savePlayerSettingsRoutine } from "../actions/routines";
import { safe } from "./error";
import { savePlayerSettings } from "../../services/http";
import { deleteLastPlayedSong, getLastPlayedSong, saveLastPlayedSong, saveLastPlayedPlaylist } from "../../utils/userSettings";
import { recalcNextAndPrevSongs } from "../../utils";


const setCurrentSong = function* ({ payload }) {
  const { songsInPlaylist, rememberLastSong, initPlayer } = yield select(state => state.player);
  const lastPlayedSong = yield getLastPlayedSong()

  if (!initPlayer && rememberLastSong && lastPlayedSong) {
    const { currentSong, nextSong, previousSong } = yield recalcNextAndPrevSongs(lastPlayedSong, songsInPlaylist)
    yield put({ type: CHANGE_SONG, payload: { currentSong, nextSong, previousSong }});
    return yield put({ type: INIT_PLAYER_END })
  }

  saveLastPlayedSong(payload)
  const { currentSong, nextSong, previousSong } = yield recalcNextAndPrevSongs(payload, songsInPlaylist)
  yield put({ type: CHANGE_SONG, payload: { currentSong, nextSong, previousSong }});
};

const changePlaylist = function* ({ payload }) {
  const playlists = yield select(state => state.user.playlists);
  const playlist = yield playlists.find(list => list._id === payload);
  saveLastPlayedPlaylist(playlist._id)

  yield put({ type: SET_SONGS_IN_PLAYLIST, payload: [...playlist.songs] });
  yield put({ type: SET_CURRENT_SONG, payload: playlist.songs[0] });
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

const saveUserPlayerSettings = function* ({ payload }) {
  if (!payload.rememberLastSong) deleteLastPlayedSong()
  const settings = yield savePlayerSettings(payload);

  yield put({ type: SET_PLAYER_SETTINGS, payload: settings });
}

const initPlayer = function* () {
  const { defaultPlaylist } = yield select(state => state.player)

  if (defaultPlaylist) yield put({ type: SET_CURRENT_PLAYLIST, payload: defaultPlaylist })
}

const playerSagas = [
  takeLatest(SET_CURRENT_SONG, setCurrentSong),
  takeLatest(SET_CURRENT_PLAYLIST, changePlaylist),
  takeLatest(PLAY_NEXT_SONG, playNext),
  takeLatest(PLAY_PREVIOUS_SONG, playPrevious),
  takeLatest(REORDER_SONGS_IN_PLAYLIST, recalcNextAndPreviousSongs),
  takeLatest(savePlayerSettingsRoutine.REQUEST, safe(saveUserPlayerSettings)),
  takeLatest(INIT_PLAYER, initPlayer),
];

export default playerSagas;