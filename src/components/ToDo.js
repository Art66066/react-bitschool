import React, { Component } from "react";
import AddTask from "./AddTask";
import Task from "./Task";
import idGenerator from "../helpers/idGenerator";
import { Container, Row, Col } from "react-bootstrap";

export class ToDo extends Component {
  state = {
    tasks: [],
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
    tasks = tasks.filter(task => {
        return task._id !== value
    })
    this.setState({
        tasks
    })
  }

  render() {
    const tasksJSX = this.state.tasks.map((task, index) => {
      return (
        <Col key={task._id} xs={12} sm={6} md={4} lg={3}>
          <Task task={task} id={index} deleteTask={this.deleteTask} />
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
            <AddTask handleClick={this.handleClick} />
          </Col>
        </Row>
        <Row className="mt-5 justify-content-center">
          {tasksJSX.length ? tasksJSX : <h5> There are no Tasks !</h5>}
        </Row>
      </Container>
    );
  }
}

export default ToDo;
