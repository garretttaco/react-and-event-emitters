import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Button from "../components/Button";
import * as actions from "./actions";

class ModalExample extends Component {
  onClickOpenModalOne = () => {
    this.props.showModal({
      title: "Title of modal one",
      body: "This is the first modal body text."
    });
  };

  onClickOpenModalTwo = () => {
    this.props.showModal({
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

const mapDispatchToProps = {
  showModal: actions.showModal
};

export default connect(null, mapDispatchToProps)(ModalExample);
