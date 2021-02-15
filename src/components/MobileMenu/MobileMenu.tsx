import * as React from "react";
import "./MobileMenu.scss";

interface MobileMenuProps {
  isVisible: boolean;
}

export default function MobileMenu(MobileMenuProps: MobileMenuProps) {
  return (
    <div className={MobileMenuProps.isVisible ? "containerMobileMenu" : "containerMobileMenu"}>
      <div className="crossContainer">
        <div className="logo"/>
        <div className="cross"/>
      </div>
      <div className="buttonsContainer">
        <button className="loginButton">Login</button>
        <button className="signupButton">Sign Up</button>
      </div>
      <div className="menuItem">Home</div>
      <div className="menuItem">RPG</div>
      <div className="menuItem">Arcade</div>
      <div className="menuItem">Brain Games</div>
      <div className="menuItem">Support</div>
      <div className="menuItem">Contact Us</div>
    </div>
  );
}