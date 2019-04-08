import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { fetchPosts, deleteTodo } from "../actions";


class Home extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount() {
    this.props.fetchPosts();
   
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newTodo) {
      this.props.todos.unshift(nextProps.newTodo);
    }
  }

  onDelete(id) {
    this.props.deleteTodo(id);
  }

  render() {
    const list = this.props.todos.map(item => (
      <div key={item.id}>
        <h6>{item.title}</h6>
        <button onClick={() => this.onDelete(item.id)}>X</button>
        {/* <Link to={`/editpost/${post.id}`} className="btn-wrapper btn">Edit</Link> */}
      </div>
    ));

    return (
      <div>
        <h3>List</h3>
        {list}
      </div>
    );
  }
}

Home.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  newTodo: PropTypes.object
};

const mapStateToProps = state => {
  return {
    todos: state.crudReducer.todos,
    newTodo: state.crudReducer.todo
  };
};

//export default Home;
export default connect(
  mapStateToProps,
  { fetchPosts, deleteTodo }
)(Home);
