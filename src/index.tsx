import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Main from "./components/Main/Main";
import "./styles/global.scss";

ReactDOM.render(
  <div>
    <HeaderBar />
    <Main />
  </div>,
  document.getElementById("app"),
);