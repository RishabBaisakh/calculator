import React from "react";
import Display from "./Display";
import { Container, Row, Col } from "react-bootstrap";
import InputPanel from "./InputPanel";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "This is the display component!",
    };
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Display value={this.state.display}></Display>
              <InputPanel />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
