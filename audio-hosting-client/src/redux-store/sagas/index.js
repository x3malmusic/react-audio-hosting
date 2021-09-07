import { all } from "redux-saga/effects";
import user from "./user";
import player from "./player"

function* rootSaga() {
  return yield all([...user, ...player ]);
}

export default rootSaga;