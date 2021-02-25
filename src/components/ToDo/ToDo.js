import React, { Component } from 'react'
import AddTask from '../AddTask/AddTask';
import Task from "../Task/Task";
import styles from './todo.module.css';
import {Container, Row, Col} from 'react-bootstrap'


export default class ToDo extends Component {
    state = {
        tasks: []
    }
    handleSubmit = (value) => {
        const tasks = [...this.state.tasks];
        tasks.push(value);
        this.setState({
            tasks
        });
    }

    render() {
        const tasksJSX = this.state.tasks.map(function (task, index) {
            return <Col key={index} xs={12} sm={6} md={4} lg={3} >
                    <Task task={task} key1={index}/> 
                </Col>});
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
                <Row>
                    {tasksJSX}
                </Row>
            </Container>
        )
    }
}


