import React, { Component } from 'react'
import AddTask from './AddTask';
import Task from "./Task"


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
            return <Task task={task} key={index}/>
        });
        return (
            <div>
                <h1>ToDo Component</h1>
                <AddTask handleSubmit={this.handleSubmit} />
                <div>{tasksJSX}</div>
            </div>
        )
    }
}


