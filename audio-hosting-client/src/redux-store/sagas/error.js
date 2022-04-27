import { put, fork } from "redux-saga/effects";
import { notify } from "../../utils/notifications";
import routines from "../actions/routines";

const DEFAULT_ERROR_MESSAGE = "Something went wrong"

const safeWrapper = function* (saga, ...rest) {
  const [args] = rest

  try {
    yield put({ type: routines[args.type].LOADING, payload: true });
    yield saga(args);
  } catch (err) {
    console.log('sagaWrapper', err)
    const errorMessage = err?.response?.data?.message || err?.message || DEFAULT_ERROR_MESSAGE

    notify({ message: errorMessage, type: 'danger', title: 'Error' });
  } finally {
    yield put({ type: routines[args.type].LOADING, payload: false });
  }
};

export const safe = (saga) =>
  function* (prop) {
    yield fork(safeWrapper, saga, prop);
  };