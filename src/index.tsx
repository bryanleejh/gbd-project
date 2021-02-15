import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import Main from "./components/Main/Main";
import FooterBar from "./components/FooterBar/FooterBar";
import "./styles/global.scss";
import "./index.scss";

ReactDOM.render(
  <div className="appContainer">
    <MobileMenu isVisible={false} />
    <HeaderBar />
    <Main />
    <FooterBar />
  </div>,
  document.getElementById("app"),
);