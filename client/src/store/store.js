import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleWare from "redux-saga";
import { appReducer, appSaga } from "./app";
import { Provider } from "react-redux";

const configureStore = () => {
  const sagaMiddleWare = createSagaMiddleWare();
  const middleware = [sagaMiddleWare];
  const store = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  sagaMiddleWare.run(appSaga);
  return store;
};

export const Store = ({ children }) => (
  <Provider store={configureStore()}>{children} </Provider>
);
