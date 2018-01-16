import { Component } from "react";
import PropTypes from "prop-types";
import mitt from "mitt";

class Provider extends Component {
  static childContextTypes = {
    emitter: PropTypes.object.isRequired
  };

  emitter = mitt();

  getChildContext() {
    return { emitter: this.emitter };
  }

  render() {
    return this.props.children;
  }
}

export default Provider;
