import { CHANGE_SONG, SET_PLAY } from "../actions/types";

const initialState = {
  currentSong: 0,
  play: false
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    case SET_PLAY:
      return {
        ...state,
        play: action.payload,
      };
    default:
      return state;
  }
};

export default player
