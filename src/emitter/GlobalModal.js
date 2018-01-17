import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { withEmitter } from "./Emitter";
import Button from "../components/Button";

class GlobalModal extends Component {
  state = { show: false };

  componentDidMount() {
    this.props.emitter.on("modal", modalOptions => {
      this.setState({ ...modalOptions, show: true });
    });
  }

  handleHide = () => {
    this.setState({ show: false });
  };

  render() {
    const { title, body, show } = this.state;
    return (
      <Modal show={show} onHide={this.handleHide}>
        {title && (
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
        )}
        {body && <Modal.Body>{body}</Modal.Body>}
        <Modal.Footer>
          <Button onClick={this.handleHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default withEmitter(GlobalModal);
