import { put, fork } from "redux-saga/effects";
import { notify } from "../../utils/notifications";

const safeWrapper = function* (saga, ...rest) {
  const [args] = rest
  try {
    // yield put({ type: SET_LOADING, payload: true });
    yield saga(args);
  } catch (err) {
    yield notify({ message: err.data.message, type: 'danger', title: 'Error' });
  } finally {
    // yield put({ type: SET_LOADING, payload: false });
  }
};

export const safe = (saga) =>
  function* (prop) {
    yield fork(safeWrapper, saga, prop);
  };