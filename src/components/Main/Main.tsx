import * as React from "react";
import "./Main.scss";

interface MainProps {
}

export default function Main() {
  return (
    <div className="containerMain">
      <div className="playWin" />
      <div className="fourGrid">
        <div className="elementBlocks"/>
        <div className="racer" />
        <div className="caesar" />
        <div className="cyberpunk" />
      </div>
      <div className="twoRows">
        <div className="liveGame" />
        <div className="twoGrid">
          <div className="bike" />
          <div className="esports" />
        </div>
      </div>
      <div className="twoRows">
        <div className="twoGrid">
          <div className="cleo" />
          <div className="soccer" />
        </div>
        <div className="league" />
      </div>
    </div>
  );
}