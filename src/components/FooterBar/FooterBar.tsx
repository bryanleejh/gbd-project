import * as React from "react";
import "./FooterBar.scss";

interface FooterBarProps {
}

export default function FooterBar() {
  return (
    <div className="containerFooterBar">
      <div className="logo" />
      <div>
        <div>Contact Us</div>
        <div>Help Centre</div>
        <div>The Group</div>
        <div>Affiliates</div>
      </div>
      <div>
        <div>Information</div>
        <div>{'Terms & Conditions'}</div>
        <div>Payment Methods</div>
        <div>Bonus Terms</div>
        <div>Responsible Gaming</div>
      </div>
    </div>
  );
}