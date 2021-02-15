import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App/App";
import "./styles/global.scss";
import "./index.scss";

ReactDOM.render(
  <App />,
  document.getElementById("app"),
);