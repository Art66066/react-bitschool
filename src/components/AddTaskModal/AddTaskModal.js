import React, { PureComponent, createRef } from "react";
import { Modal, Button, Form, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

class AddTaskModal extends PureComponent {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.state = {
      title: "",
      description: "",
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
      this.props.handleClick(this.state.title, this.state.description);
      this.setState({
        title: "",
        description: "",
      });
      this.props.toggleOpenAddModal();
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
          onHide={this.props.toggleOpenAddModal}
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
            <Button variant="secondary" onClick={this.props.toggleOpenAddModal}>
              Close
            </Button>
            <Button onClick={this.handleCl}>Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

AddTaskModal.propTypes = {
  handleClick: PropTypes.func.isRequired,
checkedTasks: PropTypes.object.isRequired,
toggleOpenAddModal: PropTypes.func.isRequired
}

export default AddTaskModal;
