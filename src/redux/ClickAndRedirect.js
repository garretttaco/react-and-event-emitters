import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../components/Button";
import * as actions from "./actions";

class ClickAndRedirect extends Component {
  onClickHandleRedirect = () => {
    this.props.redirect(this.props.to);
  };
  render() {
    return (
      <Button onClick={this.onClickHandleRedirect}>
        Redirect to {this.props.to}
      </Button>
    );
  }
}

const mapDispatchToProps = {
  redirect: actions.redirect
};

export default connect(null, mapDispatchToProps)(ClickAndRedirect);
