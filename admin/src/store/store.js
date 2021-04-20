import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { appReducer } from "./app";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  const store = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  return store;
};

export const store = configureStore();
