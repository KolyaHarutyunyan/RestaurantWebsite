import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Store } from "./store";
import { BrowserRouter } from "react-router-dom";
import "reset-css";

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Store>
  </React.StrictMode>,
  document.getElementById("root")
);
