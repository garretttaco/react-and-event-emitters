import React, { Component, Fragment } from "react";
import Button from "../components/Button";
import { withEmitter } from "./Emitter";

class ModalExample extends Component {
  onClickOpenModalOne = () => {
    this.props.emitter.emit("modal", {
      title: "Title of modal one",
      body: "This is the first modal body text."
    });
  };

  onClickOpenModalTwo = () => {
    this.props.emitter.emit("modal", {
      title: "Title of modal two",
      body: "This is the second modal body text."
    });
  };

  render() {
    return (
      <Fragment>
        <h1>Triggering a root level modal</h1>
        <Button onClick={this.onClickOpenModalOne}>Open first modal</Button>
        <Button onClick={this.onClickOpenModalTwo}>Open second modal</Button>
      </Fragment>
    );
  }
}

export default withEmitter(ModalExample);
