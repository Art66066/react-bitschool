import React, { PureComponent } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import idGenerator from "../../helpers/idGenerator";
import Task from "../Task/Task";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import TaskModal from "../TaskModal/TaskModal";

export class ToDo extends PureComponent {
  state = {
    tasks: [],
    checkedTasks: new Set(),
    isConfirmOpen: false,
    isAddModalOpen: false,
    editableTask: null
  };

  setEdit = (task) => {
    this.setState({
      editableTask: task,
    });
  };
  closeEditModal = () => {
    this.setState({
      editableTask: null,
    });
  };
  toggleOpenClose = () => {
    this.setState({
      isConfirmOpen: !this.state.isConfirmOpen,
    });
  };

  handleClick = (value) => {
    const tasks = [...this.state.tasks];
    tasks.push({ ...value, _id: idGenerator() });
    this.setState({
      tasks: tasks,
    });
  };

  deleteTask = (value) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => {
      return task._id !== value;
    });
    this.setState({
      tasks,
    });
  };
  handleToggleChecked = (value) => {
    let checkedTasks = new Set(this.state.checkedTasks);
    if (checkedTasks.has(value)) {
      checkedTasks.delete(value);
    } else {
      checkedTasks.add(value);
    }
    this.setState({
      checkedTasks,
    });
  };

  deleteAllChecked = () => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => {
      return !this.state.checkedTasks.has(task._id);
    });
    this.setState({
      tasks: tasks,
      checkedTasks: new Set(),
    });
    this.toggleOpenClose();
  };
  markOrUnmarkAll = () => {
    const { tasks } = this.state;
    let checkedTasks = new Set(this.state.checkedTasks);
    if (tasks.length === checkedTasks.size) {
      checkedTasks.clear();
    } else {
      tasks.forEach((task) => {
        checkedTasks.add(task._id);
      });
    }
    this.setState({
      checkedTasks,
    });
  };
  toggleOpenAddModal = () => {
    this.setState({
      isAddModalOpen: !this.state.isAddModalOpen,
    });
  };

  toggleEditModal = () => {
    this.setState({
      isEditTaskOpen: !this.state.isEditTaskOpen,
    });
  };
  editTask = (editableTask) => {
    const tasks = [...this.state.tasks];
    const idx = tasks.findIndex((task) => {
      return task._id === editableTask._id;
    });
    tasks[idx] = editableTask;
    this.setState({
      tasks,
    });
  };

  render() {
    const tasksJSX = this.state.tasks.map((task, index) => {
      return (
        <Col key={task._id} xs={12} sm={6} md={4} lg={3}>
          <Task
            task={task}
            id={index}
            deleteTask={this.deleteTask}
            handleToggleChecked={this.handleToggleChecked}
            checkedTasks={this.state.checkedTasks}
            isChecked={this.state.checkedTasks.has(task._id)}
            toggleEditModal={this.toggleEditModal}
            setEdit={this.setEdit}
          />
        </Col>
      );
    });
    return (
      <Container fluid={true}>
        <Row className="mt-3">
          <Col>
            <h2 style={{ display: "flex", justifyContent: "center" }}>
              My Todo List
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              className="mt-5"
              variant="primary"
              onClick={this.toggleOpenAddModal}
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "auto",
              }}
              disabled={this.state.checkedTasks.size}
            >
              Add task
            </Button>
          </Col>
        </Row>
        <Row className="mt-4 ml-4">
          <Col>
            {this.state.isAddModalOpen && (
              <TaskModal
                onSubmit={this.handleClick}
                onHide={this.toggleOpenAddModal}
              />
            )}
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center">
          {tasksJSX.length ? tasksJSX : <h5> There are no tasks !</h5>}
        </Row>
        <Row className="mt-2">
          <Col>
            {this.state.tasks.length ? (
              <Button
                variant="danger"
                onClick={this.toggleOpenClose}
                disabled={!this.state.checkedTasks.size}
              >
                Delete all checked
              </Button>
            ) : (
              ""
            )}
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            {this.state.tasks.length ? (
              <Button
                variant="secondary"
                onClick={this.markOrUnmarkAll}
                disabled={!this.state.tasks.length}
              >
                {this.state.tasks.length === this.state.checkedTasks.size
                  ? "Remove All"
                  : "Check All"}
              </Button>
            ) : (
              ""
            )}
          </Col>
        </Row>
        {this.state.isConfirmOpen && (
          <ConfirmModal
            deleteAllChecked={this.deleteAllChecked}
            toggleOpenClose={this.toggleOpenClose}
            checkedTasks={this.state.checkedTasks.size}
          />
        )}
        {this.state.editableTask && (
          <TaskModal
            editableTask={this.state.editableTask}
            onHide={this.closeEditModal}
            onSubmit={this.editTask}
          />
        )}
      </Container>
    );
  }
}

export default ToDo;
