import React, { Component } from 'react';
import {Button, Form} from "react-bootstrap";

class AddTask extends Component {
    state = {
        inputValue: ""
    }

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleCl = () => {
        if(!this.state.inputValue) {
           return
        }
        else {
            this.props.handleClick(this.state.inputValue);
            this.setState({
                inputValue: ""
            })
        }
    }
    keyenter = (e) => {
        if (e.key === "Enter"){
            this.handleCl()
        }
    }

    render() {
        return (
            <div style={{display:"flex"}}>
                
                    <Form.Control type="text" placeholder="add task here" onChange={this.handleChange} onKeyPress={this.keyenter} value={this.state.inputValue} style={{width: "40%", backgroundColor: "black",color: "white"}} />
                    <Button variant="info" type="submit" onClick={this.handleCl}>Add</Button>
                
            </div>
        )
    }
}

export default AddTask
