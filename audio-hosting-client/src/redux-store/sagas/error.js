import { put, fork } from "redux-saga/effects";
import { SET_ERROR } from "../actions/types";
import { notify } from "../../utils/notifications";

const safeWrapper = function* (saga, ...rest) {
  const [args] = rest
  try {
    // yield put({ type: SET_LOADING, payload: true });
    yield saga(args);
  } catch (err) {
    yield put({ type: SET_ERROR, payload: err });
    yield notify({ message: err, type: 'danger', title: 'Error' });
  } finally {
    // yield put({ type: SET_LOADING, payload: false });
  }
};

export const safe = (saga) =>
  function* (prop) {
    yield fork(safeWrapper, saga, prop);
  };