import React, { Component } from "react";

class AddNewTask extends Component {
  state = {
    inputValue: "",
    tasks: [],
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      inputValue: value,
    });
  };

  //   handleSave = () => {
  //     this.setState({
  //       tasks: [...this.state.tasks, this.state.inputValue],
  //       inputValue: ""
  //     });
  //   };

  handleSub = () => {
    const { handleSubmit } = this.props
    handleSubmit(this.state.inputValue)
  }

  render() {
    const tasksJSX = this.state.tasks.map((item, index) => {
      return <p key={index}>{item}</p>;
    });
    return (
      <div>
        <input
          type="text"
          placeholder="type in here"
          onChange={this.handleChange}
          value={this.state.inputValue}
        ></input>
        <button onClick={this.handleSub}>Save</button>
        <div>{tasksJSX}</div>
      </div>
    );
  }
}

export default AddNewTask;
