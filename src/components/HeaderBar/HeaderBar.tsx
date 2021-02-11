import * as React from "react";
import "./HeaderBar.scss";

interface HeaderBarProps {
}

export default class HeaderBar extends React.Component<HeaderBarProps> {
  public render() {
    return (
      <div className="container">
        <div className="logo" />
        <div className="container_text">
          Home
        </div>
        <div className="container_text">
          RPG
        </div>
        <div className="container_text">
          Arcade
        </div>
        <div className="container_text">
          Brain Games
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
}