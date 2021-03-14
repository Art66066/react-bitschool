import React, { PureComponent } from "react";
import { Modal, Button } from "react-bootstrap";

class ConfirmModal extends PureComponent {
  render() {
    return (
      <div>
        <Modal show={true} onHide={this.props.toggleOpenClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete {this.props.checkedTasks} of the
            tasks?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.toggleOpenClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={this.props.deleteAllChecked}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ConfirmModal;
