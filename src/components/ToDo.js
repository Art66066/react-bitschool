import React, { Component } from "react";
import AddNewTask from "./AddNewTask";


class ToDo extends Component {
  state = {
    inputValue: "",
  };

  handleSubmit = (value) => {
    this.setState({
        inputValue: value
    })
  };
  render() {
      console.log(this.state);
    return (
      <div>
        <AddNewTask handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default ToDo;
