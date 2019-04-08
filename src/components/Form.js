import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createTodo } from "../actions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      completed: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }

  onSubmit(e) {
    e.preventDefault();
    const todo = {
      id: this.state.id,
      title: this.state.title,
      completed: this.state.completed
    };
    this.props.createTodo(todo);
   
    this.setState({ id: "", title: "", completed: "" });
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label> Id : </label>

            <input
              type="number"
              name="id"
              onChange={this.onChange}
              value={this.state.id}
            />
          </div>
          <div>
            <label> Title : </label>

            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>

          <div>
            <label> Completed : </label>

            <input
              type="text"
              name="completed"
              onChange={this.onChange}
              value={this.state.completed}
            />
          </div>
          <br />
          <button type="submit">Submit </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  createTodo: PropTypes.func.isRequired
};

export default connect(
  null,
  { createTodo }
)(Form);
