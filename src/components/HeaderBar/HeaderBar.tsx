import * as React from "react";
import "./HeaderBar.scss";

interface HeaderBarProps {
  name: string;
}

export default class HeaderBar extends React.Component<HeaderBarProps> {
  public render() {
    return (
      <div className="container">
        <div className="logo" />
        <div className="container_text">
          Hello {this.props.name}!
        </div>
        <div className="container_text">
          Hello {this.props.name}!
        </div>
        <div className="container_text">
          Hello {this.props.name}!
        </div>
        <div className="container_text">
          Hello {this.props.name}!
        </div>
      </div>
    );
  }
}