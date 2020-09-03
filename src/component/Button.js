import React from "react";
import "./Button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.props.onClick(this.props.name);
  }

  render() {
    var className =
      this.props.name === "0" ? "zero inputButton" : "inputButton";

    return (
      <>
        <button className={className} onClick={this.handleButtonClick}>
          {this.props.name}
        </button>
      </>
    );
  }
}

export default Button;
