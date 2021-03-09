import React, { PureComponent } from "react";
import AddTask from "../AddTask/AddTask";
import Task from "../Task/Task";
import idGenerator from "../../helpers/idGenerator";
import { Container, Row, Col, Button } from "react-bootstrap";

export class ToDo extends PureComponent {
  state = {
    tasks: [],
    checkedTasks: new Set(),
  };

  handleClick = (value) => {
    const tasks = [...this.state.tasks];
    tasks.push({ text: value, _id: idGenerator() });
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
        <Row className="mt-4 ml-4">
          <Col>
            <AddTask
              handleClick={this.handleClick}
              checkedTasks={this.state.checkedTasks}
            />
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center">
          {tasksJSX.length ? tasksJSX : <h5> There are no Tasks !</h5>}
        </Row>
        <Row className="mt-2">
          <Col>
            {this.state.tasks.length ? (
              <Button
                variant="danger"
                onClick={this.deleteAllChecked}
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
      </Container>
    );
  }
}

export default ToDo;
