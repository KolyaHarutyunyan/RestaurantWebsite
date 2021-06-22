import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Store } from "./store";
import { Router } from "react-router-dom";
import { initAxiosInterceptors } from "./utils";
import { history } from "./utils/history";
import "reset-css";

initAxiosInterceptors();
ReactDOM.render(
  <React.StrictMode>
    <Store>
      <Router history={history}>
        <App />
      </Router>
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
export { history };
