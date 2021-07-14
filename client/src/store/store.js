import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { appReducer, appSaga } from "./app";
import { createWrapper } from "next-redux-wrapper";

export const reduxWrapper = () => {
  const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];
    const store = createStore(
      appReducer,
      composeWithDevTools(applyMiddleware(...middleware))
    );
    store.sagaTask = sagaMiddleware.run(appSaga);

    return store;
  };

  return createWrapper(makeStore, { debug: true });
};
