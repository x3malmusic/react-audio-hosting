import { put, fork } from "redux-saga/effects";
import { notify } from "../../utils/notifications";
import routines from "../actions/routines";

const safeWrapper = function* (saga, ...rest) {
  const [args] = rest

  try {
    yield put({ type: routines[args.type].LOADING, payload: true });
    yield saga(args);
  } catch (err) {
    console.log('sagaWrapper', err)
    notify({ message: err.data?.message, type: 'danger', title: 'Error' });
  } finally {
    yield put({ type: routines[args.type].LOADING, payload: false });
  }
};

export const safe = (saga) =>
  function* (prop) {
    yield fork(safeWrapper, saga, prop);
  };