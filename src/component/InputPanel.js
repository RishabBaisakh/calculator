import React from "react";
import Button from "./Button";
import "./InputPanel.css";
import Evaluate from "../logic/evaluate";

class InputPanel extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputButtonClick = this.handleInputButtonClick.bind(this);
    this.handleResetButtonClick = this.handleResetButtonClick.bind(this);
    this.handleOperatorButtonClick = this.handleOperatorButtonClick.bind(this);
    this.handleEqualButtonClick = this.handleEqualButtonClick.bind(this);

    this.state = {
      inputStream: "",
      numberOne: null,
      numberTwo: null,
      operator: null,
    };
  }

  handleInputButtonClick(event) {
    var inputStream = this.state.inputStream + event;

    this.setState({ inputStream: inputStream });
    this.props.onChange(inputStream);

    if (!this.state.operator) this.setState({ numberOne: inputStream });
    else this.setState({ numberTwo: inputStream });
  }

  handleResetButtonClick(event) {
    this.props.onChange("0");
  }

  handleOperatorButtonClick(event) {
    console.log("handleOperatorButtonClick() => ", event);
    var operator = event;

    if (!this.state.operator) {
      console.log("reached here!");
      this.props.onChange(operator);
      this.setState({ operator: operator, inputStream: "" });
    } else alert("Can't perform this operation!");
  }

  handleEqualButtonClick(event) {
    // Why?
    // if (this.state.numberOne != null) console.log("dkvbfdbv");
    var result = null;

    if (
      this.state.numberOne != null &&
      this.state.numberTwo != null &&
      this.state.operator != null
    ) {
      result = Evaluate(
        parseFloat(this.state.numberOne),
        parseFloat(this.state.numberTwo),
        this.state.operator
      );

      this.props.onChange(result);

      this.setState({
        numberOne: result,
        numberTwo: null,
        operator: null,
      });
    } else alert("Can't evaluate yet!");
  }

  render() {
    return (
      <>
        <div className="inputPanel">
          <div className="InputRow">
            <Button onClick={this.handleResetButtonClick} name="AC" />
            <Button onClick={this.handleInputButtonClick} name="+/-" />
            <Button onClick={this.handleOperatorButtonClick} name="%" />
            <Button onClick={this.handleOperatorButtonClick} name="÷" />
          </div>
          <div className="InputRow">
            <Button onClick={this.handleInputButtonClick} name="7" />
            <Button onClick={this.handleInputButtonClick} name="8" />
            <Button onClick={this.handleInputButtonClick} name="9" />
            <Button onClick={this.handleOperatorButtonClick} name="*" />
          </div>
          <div className="InputRow">
            <Button onClick={this.handleInputButtonClick} name="4" />
            <Button onClick={this.handleInputButtonClick} name="5" />
            <Button onClick={this.handleInputButtonClick} name="6" />
            <Button onClick={this.handleOperatorButtonClick} name="-" />
          </div>
          <div className="InputRow">
            <Button onClick={this.handleInputButtonClick} name="1" />
            <Button onClick={this.handleInputButtonClick} name="2" />
            <Button onClick={this.handleInputButtonClick} name="3" />
            <Button onClick={this.handleOperatorButtonClick} name="+" />
          </div>

          <div className="InputRow">
            <Button
              variant="primary"
              onClick={this.handleInputButtonClick}
              name="0"
            />
            <Button onClick={this.handleInputButtonClick} name="." />
            <Button onClick={this.handleEqualButtonClick} name="=" />
          </div>
        </div>
      </>
    );
  }
}

export default InputPanel;
