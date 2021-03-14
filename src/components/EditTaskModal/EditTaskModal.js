import React, { Component, createRef } from "react";
import { Button, Modal, FormControl, Form } from "react-bootstrap";
import PropTypes from "prop-types";

class EditTaskModal extends Component {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.state = {
      ...props.editableTask,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCl = () => {
    if (!this.state.title) {
      return;
    } else {
      this.props.editTask(this.state);
      this.props.closeEditModal();
    }
  };

  keyenter = (e) => {
    if (e.key === "Enter") {
      this.handleCl();
    }
  };
  componentDidMount() {
    this.inputRef.current.focus();
  }
  render() {
    return (
      <div>
        <Modal
          size="lg"
          show={true}
          onHide={this.props.closeEditModal}
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
              ref={this.inputRef}
            />
            <FormControl
              className="mt-3"
              as="textarea"
              name="description"
              onChange={this.handleChange}
              aria-label="With textarea"
              placeholder="add description"
              style={{ resize: "none", height: "110px" }}
              value={this.state.description}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closeEditModal}>
              Cancel Edit
            </Button>
            <Button onClick={this.handleCl}>Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

    EditTaskModal.propTypes = {
        editableTask: PropTypes.object.isRequired,
        closeEditModal: PropTypes.func.isRequired,
        editTask: PropTypes.func.isRequired
    }

export default EditTaskModal;
