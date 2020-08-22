import React from "react";
import "./Button.css";
import { render } from "@testing-library/react";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    alert("Button Clicked");
    this.props.onClick(this.props.name);
  }

  render() {
    return (
      <>
        <button
          className={this.props.className}
          onClick={this.handleButtonClick}
        >
          {this.props.name}
        </button>
      </>
    );
  }
}

export default Button;
