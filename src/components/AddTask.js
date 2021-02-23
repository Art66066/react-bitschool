import React, { Component } from 'react'

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
    render() {
        return (
            <div>
               <h1>Add Task Component</h1>
               <div>
                    <input type="text" 
                    placeholder="Add task"
                    onChange={this.handleChange}
                    value={this.state.inputValue}
                    />
                    <button onClick={this.handleS}>Add</button>
                </div>
            </div>
        )
    }
}


