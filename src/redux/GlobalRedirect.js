import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";

class GlobalRedirect extends Component {
  state = {
    shouldRedirect: false,
    to: null
  };

  componentWillReceiveProps(nextProps) {
    const { to } = nextProps;
    if (to) {
      this.setState({ to, shouldRedirect: true }, () => {
        this.setState({ to: null, shouldRedirect: false });
        this.props.redirect(null);
      });
    }
  }

  render() {
    const { to, shouldRedirect } = this.state;
    return shouldRedirect ? <Redirect to={to} /> : null;
  }
}

const mapDispatchToProps = {
  redirect: actions.redirect
};

function mapStateToProps({ events }) {
  return { to: events.redirect.to };
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalRedirect);
