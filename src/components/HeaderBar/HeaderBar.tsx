import * as React from "react";
import "./HeaderBar.scss";

interface HeaderBarProps {
}

export default function HeaderBar() {
  return (
    <div className="containerHeaderBar">
      <div className="logo" />
      <div className="linksHeaderBar">
        <div className="containerHeaderBar_text">
          Home
      </div>
        <div className="containerHeaderBar_text">
          RPG
      </div>
        <div className="containerHeaderBar_text">
          Arcade
      </div>
        <div className="containerHeaderBar_text">
          Brain Games
      </div>
      </div>
      
      <div></div>
      <div className="loginContainer">
        <div className="loginColumn"> 
          <button className="loginButton">Login</button>
          <div className="loginText">Support</div>
        </div>
        <div className="loginColumn">
          <button className="signupButton">Sign Up</button>
          <div className="loginText">Contact Us</div>
        </div>
      </div>
    </div>
  );
}