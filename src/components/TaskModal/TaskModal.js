import React, { PureComponent, createRef } from "react";
import { Modal, Button, Form, FormControl } from "react-bootstrap";
import PropTypes from "prop-types";

class TaskModal extends PureComponent {
  constructor(props) {
    super(props);
    this.inputRef = createRef();
    this.state = {
      title: "",
      description: "",
      ...props.editableTask
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
      this.props.onSubmit(this.state);
      this.setState({
        title: "",
        description: "",
      });
      this.props.onHide();
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
          onHide={this.props.onHide}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {this.props.editableTask?"Edit Task":"Add Task"}
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
            <Button variant="secondary" onClick={this.props.onHide}>
              Close
            </Button>
            <Button onClick={this.handleCl}>{this.props.editableTask?"Edit":"Add"}</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// TaskModal.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// checkedTasks: PropTypes.object.isRequired,
// toggleOpenAddModal: PropTypes.func.isRequired
// }

export default TaskModal;
