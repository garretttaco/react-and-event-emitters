import React, { Component } from "react";
import Button from "../components/Button";
import { withEmitter } from "./Emitter.js";

class ClickAndRedirect extends Component {
  onClickHandleRedirect = () => {
    this.props.emitter.emit("redirect", { to: this.props.to });
  };
  render() {
    return (
      <Button onClick={this.onClickHandleRedirect}>
        Redirect to {this.props.to}
      </Button>
    );
  }
}

export default withEmitter(ClickAndRedirect);
