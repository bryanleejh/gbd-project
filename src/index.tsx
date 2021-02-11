import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import "./styles/global.scss";

ReactDOM.render(
  <div>
    <HeaderBar name="TEST" />
  </div>,
  document.getElementById("app"),
);