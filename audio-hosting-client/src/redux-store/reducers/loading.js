const initialState = {};

const loading = (state = initialState, action) => {
  if (action.type.search("LOADING") > 0) {
    return {
      ...state,
      [action.type]: action.payload,
    };
  }
  return state;
};

export default loading
