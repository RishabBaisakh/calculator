import React from "react";
import Display from "./Display";
import { Container, Row, Col } from "react-bootstrap";
import InputPanel from "./InputPanel";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.changeDisplay = this.changeDisplay.bind(this);

    this.state = {
      display: "This is the display component!",
    };
  }

  changeDisplay(display) {
    this.setState({
      display: display,
    });
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Display value={this.state.display}></Display>
              <InputPanel
                onChange={(display) => {
                  this.changeDisplay(display);
                }}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
