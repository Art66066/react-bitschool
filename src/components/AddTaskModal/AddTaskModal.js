import React, { Component } from "react";
import { Modal, Button, Form, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

class AddTaskModal extends Component {
  state = {
    title: "",
    description: "",
    isAddModalOpen: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCl = () => {
    if (!this.state.title) {
      return;
    } else {
      this.props.handleClick(this.state.title, this.state.description);
      this.setState({
        title: "",
        description: "",
      });
      this.toggleOpenAddModal();
    }
  };
  keyenter = (e) => {
    if (e.key === "Enter") {
      this.handleCl();
    }
  };
  toggleOpenAddModal = () => {
    this.setState({
      isAddModalOpen: !this.state.isAddModalOpen,
    });
  };
  render() {
    return (
      <div>
        <Button onClick={this.toggleOpenAddModal} style={{display: "flex",justifyContent:"center",margin:"auto"}}>Add task</Button>
        <Modal
          size="lg"
          show={this.state.isAddModalOpen}
          onHide={this.toggleOpenAddModal}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add title
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              name="title"
              type="text"
              placeholder="add title here"
              onChange={this.handleChange}
              onKeyPress={this.keyenter}
              value={this.state.title}
            />
            <FormControl
            className="mt-3"
              as="textarea"
              name="description"
              onChange={this.handleChange}
              aria-label="With textarea"
              placeholder="add description"
              style={{ resize: "none",height: "110px" }}
              value={this.state.description}
              
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.toggleOpenAddModal}>
              Close
            </Button>
            <Button onClick={this.handleCl}>Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddTaskModal;
