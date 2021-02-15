import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App/App";
import "./styles/global.scss";
import "./index.scss";
import { Provider } from "react-redux";
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app"),
);