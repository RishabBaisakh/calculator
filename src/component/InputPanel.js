import React from "react";
import InputGroupWithExtras from "react-bootstrap/esm/InputGroup";
import Button from "./Button";
import "./InputPanel.css";

function handleInputButtonClick(event) {
  console.log("handleButtonClick() => ", event);
}

function handleResetButtonClick(event) {
  console.log("handleResetButtonClick() => ", event);
}

function handleOperatorButtonClick(event) {
  console.log("handleOperatorButtonClick() => ", event);
}
function handleEqualButtonClick(event) {
  console.log("handleEqualButtonClick() => ", event);
}

function InputPanel(props) {
  return (
    <>
      <div className="inputPanel">
        <div className="InputRow">
          <Button
            className="inputButton"
            onClick={handleResetButtonClick}
            name="AC"
          />
          <Button
            className="inputButton"
            onClick={handleInputButtonClick}
            name="+/-"
          />
          <Button
            className="inputButton"
            onClick={handleOperatorButtonClick}
            name="%"
          />
          <Button
            className="inputButton"
            onClick={handleOperatorButtonClick}
            name="÷"
          />
        </div>
        <div className="InputRow">
          <Button
            className="inputButton"
            onClick={handleInputButtonClick}
            name="7"
          />
          <Button
            className="inputButton"
            onClick={handleInputButtonClick}
            name="8"
          />
          <Button
            className="inputButton"
            onClick={handleInputButtonClick}
            name="9"
          />
          <Button
            className="inputButton"
            onClick={handleOperatorButtonClick}
            name="*"
          />
        </div>
        <div className="InputRow">
          <Button
            className="inputButton"
            onClick={handleInputButtonClick}
            name="4"
          />
          <Button
            className="inputButton"
            onClick={handleInputButtonClick}
            name="5"
          />
          <Button
            className="inputButton"
            onClick={handleInputButtonClick}
            name="6"
          />
          <Button
            className="inputButton"
            onClick={handleOperatorButtonClick}
            name="-"
          />
        </div>
        <div className="InputRow">
          <Button
            className="inputButton"
            onClick={handleInputButtonClick}
            name="1"
          />
          <Button
            className="inputButton"
            onClick={handleInputButtonClick}
            name="2"
          />
          <Button
            className="inputButton"
            onClick={handleInputButtonClick}
            name="3"
          />
          <Button
            className="inputButton"
            onClick={handleOperatorButtonClick}
            name="+"
          />
        </div>

        <div className="InputRow">
          <Button
            className="zero inputButton"
            variant="primary"
            onClick={handleInputButtonClick}
            name="0"
          />
          <Button
            className="inputButton"
            onClick={handleInputButtonClick}
            name="."
          />
          <Button
            className="inputButton"
            onClick={handleEqualButtonClick}
            name="="
          />
        </div>
      </div>
    </>
  );
}

export default InputPanel;
