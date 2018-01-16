import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import Button from "../components/Button";
import * as actions from "./actions";

class GlobalModal extends Component {
  handleHide = () => {
    this.props.hideModal();
  };

  render() {
    const { modalOptions: { title, body, show } } = this.props;
    return (
      <Modal show={show} onHide={this.props.hideModal}>
        {title && (
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        )}
        {body && <Modal.Body>{body}</Modal.Body>}
        <Modal.Footer>
          <Button onClick={this.props.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapDispatchToProps = {
  hideModal: actions.hideModal
};

function mapStateToProps({ events }) {
  return { modalOptions: events.modalOptions };
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalModal);
