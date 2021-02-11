import * as React from "react";
import "./HeaderBar.scss";

interface HeaderBarProps {
  name: string;
}

export default class HeaderBar extends React.Component<HeaderBarProps> {
  public render() {
    return (
      <div className="container">
        <span className="container__text">
          Hello {this.props.name}!
        </span>
      </div>
    );
  }
}