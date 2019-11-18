import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "../../assets/css/VideoModal.css";

export default class VideoModal extends Component {
  render() {
    return (
      <Modal
        className="Modal-Container"
        show={this.props.isOpen}
        centered
        onHide={this.props.isHide}
      >
        <Modal.Header closeButton></Modal.Header>
        <iframe
          key={this.props.iframeVideo}
          src={`https://www.youtube.com/embed/${this.props.iframeVideo}`}
          frameBorder="0"
          width="600"
          height="400"
        />
      </Modal>
    );
  }
}
