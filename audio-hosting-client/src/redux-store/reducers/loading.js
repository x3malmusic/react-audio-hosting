import { SET_LOADING } from "../actions/types";

const initialState = {
  loading: false
};

const player = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default player
