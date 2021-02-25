import React, { Component } from 'react'
import styles from './addtask.module.css'

export default class AddTask extends Component {
    state = {
        inputValue: ""
    }

    handleChange = (event) => {
        const {value} = event.target;
        this.setState({
            inputValue: value
        });
    }

    handleS = () => {
        if(!this.state.inputValue)
            return
        this.props.handleSubmit(this.state.inputValue);
        this.setState({
            inputValue: ""
        })
    }
    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          this.handleS()
        }
      }
    render() {
        return (
            <div className={styles.div}>
               <h1 className={styles.heading1}>Add Task Below</h1>
               <div className={styles.div2}>
                    <input className={styles.input} type="text" 
                    placeholder="Add task"
                    onChange={this.handleChange}
                    value={this.state.inputValue}
                    onKeyPress={this.handleKeyPress}
                    />
                    <button onClick={this.handleS}>Add</button>
                </div>
            </div>
        )
    }
}


