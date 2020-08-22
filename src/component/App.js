import React from "react";
import Display from "./Display";
import { Container, Row, Col } from "react-bootstrap";
import InputPanel from "./InputPanel";
import "./App.css";

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Display value={"This is the display component!"}></Display>
            <InputPanel />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
