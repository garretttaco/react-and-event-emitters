import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { withEmitter } from "./Emitter";

class GlobalEmitterRedirect extends Component {
  state = {
    shouldRedirect: false,
    to: null
  };

  componentDidMount() {
    this.props.emitter.on("redirect", ({ to }) => {
      this.setState({ to, shouldRedirect: true }, () => {
        this.setState({ to: null, shouldRedirect: false });
      });
    });
  }

  componentWillUnmount() {
    this.props.emitter.off("redirect");
  }

  render() {
    const { to, shouldRedirect } = this.state;
    return shouldRedirect ? <Redirect to={to} /> : null;
  }
}

export default withEmitter(GlobalEmitterRedirect);
