import React, { Component } from 'react'
import AddTask from '../AddTask/AddTask';
import Task from "../Task/Task"
import styles from './todo.module.css'


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
            return <Task task={task} key1={index} key={index}/>
        });
        return (
            <div>
                <h1 className={styles.h1}>My ToDos</h1>
                <AddTask handleSubmit={this.handleSubmit} />
                <div>{tasksJSX}</div>
            </div>
        )
    }
}


