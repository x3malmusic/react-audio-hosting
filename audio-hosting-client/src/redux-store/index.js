import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/index";
import rootSaga from "./sagas";
import { notifyWare } from "./middleware/notifyWare";

const saga = createSagaMiddleware({onError: error => {
    console.log('sagaRoot', error)
    saga.run(rootSaga);
  }});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(saga, notifyWare),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

saga.run(rootSaga);

export default store