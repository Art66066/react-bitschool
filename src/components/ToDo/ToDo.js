import React, { Component } from "react";
import AddTask from "../AddTask/AddTask";
import Task from "../Task/Task";
import styles from "./todo.module.css";
import { Container, Row, Col } from "react-bootstrap";
import idGenerator from "../../helpers/idGenerator";

export default class ToDo extends Component {
  state = {
    tasks: [],
  };
  handleSubmit = (value) => {
    const tasks = [...this.state.tasks];
    tasks.push({ title: value, _id: idGenerator() });
    this.setState({
      tasks,
    });
  };

  handleDeleteTask = (_id) => {
    this.setState({
      tasks: this.state.tasks.filter((item) => {
        return item._id !== _id;
      }),
    });
  };

  render() {
    const tasksJSX = this.state.tasks.map((task, index) => {
      return (
        <Col key={task._id} xs={12} sm={6} md={4} lg={4}>
          <Task
            task={task}
            key1={index}
            handleDeleteTask={this.handleDeleteTask}
          />
        </Col>
      );
    });

    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <h1 className={styles.h1}>My ToDos</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <AddTask handleSubmit={this.handleSubmit} />
          </Col>
        </Row>
        <Row>{tasksJSX}</Row>
      </Container>
    );
  }
}
