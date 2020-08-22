import React from "react";
import InputGroupWithExtras from "react-bootstrap/esm/InputGroup";
import Button from "./Button";
import "./InputPanel.css";

function handleButtonClick(event) {
  console.log(event);
}

function InputPanel(props) {
  return (
    <>
      <div className="inputPanel">
        <div className="InputRow">
          <Button
            className="inputButton"
            onClick={handleButtonClick}
            name="AC"
          />
          <Button
            className="inputButton"
            onClick={handleButtonClick}
            name="+/-"
          />
          <Button
            className="inputButton"
            onClick={handleButtonClick}
            name="%"
          />
          <Button
            className="inputButton"
            onClick={handleButtonClick}
            name="÷"
          />
        </div>
        <div className="InputRow">
          <Button
            className="inputButton"
            onClick={handleButtonClick}
            name="7"
          />
          <Button
            className="inputButton"
            onClick={handleButtonClick}
            name="8"
          />
          <Button
            className="inputButton"
            onClick={handleButtonClick}
            name="9"
          />
          <Button
            className="inputButton"
            onClick={handleButtonClick}
            name="*"
          />
        </div>
        <div className="InputRow">
          <Button
            className="inputButton"
            onClick={handleButtonClick}
            name="4"
          />
          <Button
            className="inputButton"
            onClick={handleButtonClick}
            name="3"
          />
          <Button
            className="inputButton"
            onClick={handleButtonClick}
            name="2"
          />
          <Button
            className="inputButton"
            onClick={handleButtonClick}
            name="1"
          />
        </div>
        <div className="InputRow">
          <Button
            className="zero inputButton"
            variant="primary"
            onClick={handleButtonClick}
            name="0"
          />
          <Button
            className="inputButton"
            onClick={handleButtonClick}
            name="."
          />
          <Button
            className="inputButton"
            onClick={handleButtonClick}
            name="="
          />
        </div>
      </div>
    </>
  );
}

export default InputPanel;
