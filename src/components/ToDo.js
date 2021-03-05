import React, { Component } from 'react'
import AddTask from './AddTask';
import Task from './Task';
import idGenerator from "./helpers/idGenerator";
import {Container,Row,Col} from "react-bootstrap"

export class ToDo extends Component {
    state = {
        tasks: []
    }

    handleClick = (value) => {
        const tasks = [...this.state.tasks];
        tasks.push({text: value,_id: idGenerator()});
        this.setState({
        tasks: tasks
        })
    }

    render() {
        const tasksJSX = this.state.tasks.map(task => {
            return <Col key={task._id} xs={12} sm={6} md={4} lg={3}>
                <Task task={task}/>
            </Col>
        })
        return (
            <Container fluid={true}>
                <Row>
                    <Col>
                        <h1>ToDo Component</h1> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <AddTask handleClick={this.handleClick}/>
                    </Col>
                </Row>
                <Row className="mt-5, d-flex, justify-content-center">
                {tasksJSX.length ? tasksJSX : <p style={{marginTop: "5rem"}}> There are no Tasks !</p>}
                </Row>
            </Container>
        )
    }
}

export default ToDo
