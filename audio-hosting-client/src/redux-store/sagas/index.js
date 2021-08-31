import { all } from "redux-saga/effects";
import user from "./user";

function* rootSaga() {
  return yield all([...user]);
}

export default rootSaga;