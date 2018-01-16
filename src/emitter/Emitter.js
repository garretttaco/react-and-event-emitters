import React, { Component } from "react";
import PropTypes from "prop-types";

// Render prop
class Emitter extends Component {
  static contextTypes = {
    emitter: PropTypes.object.isRequired
  };
  render() {
    const { render, children } = this.props;
    return render ? render({ ...this.context }) : children({ ...this.context });
  }
}

// HoC
export const withEmitter = WrappedComponent =>
  class WithEmitter extends Component {
    static contextTypes = {
      emitter: PropTypes.object.isRequired
    };
    render() {
      return <WrappedComponent {...this.props} {...this.context} />;
    }
  };

export default Emitter;
