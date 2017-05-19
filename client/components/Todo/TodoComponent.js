import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  fetchTodosAsync,
  addTodoAsync,
  updateTodoAsync,
} from '../../actions/todo';

import { TodoItemComponent } from '../../components';

class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);

    this.state = {
      title: '',
    };
  }

  componentDidMount() {
    const { user } = this.props;
    this.props.fetchTodosAsync(user.id);
  }

  handleTodoChange(event) {
    const { value } = event.target;
    this.setState({ title: value });
  }

  handleAddTodo(event) {
    if (event.charCode === 13) {
      const { title } = this.state;
      const { user } = this.props;
      const payload = {
        title,
        isComplete: false,
        UserId: user.id,
      };

      this.props.addTodoAsync(payload);
      this.setState({ title: '' });
    }
  }

  render() {
    const { title } = this.state;
    const { todos } = this.props;
    return (
      <div className="todoContainer">
        <h1>React Redux Todo</h1>
        <input
          type="text"
          onChange={this.handleTodoChange}
          onKeyPress={this.handleAddTodo}
          value={title}
        />
        <ul>
          {todos.map(todo => (
            <TodoItemComponent
              key={todo.id}
              title={todo.title}
              isComplete={todo.isComplete}
              created={todo.createdAt}
              update={this.props.updateTodoAsync}
            />
          ))
          }
        </ul>
      </div>
    );
  }
}

TodoComponent.defaultProps = {
  user: {},
  todos: [],
  fetchTodosAsync: () => {},
  addTodoAsync: () => {},
  updateTodoAsync: () => {},
};

TodoComponent.propTypes = {
  user: PropTypes.object.isRequired,
  todos: PropTypes.array.isRequired,
  fetchTodosAsync: PropTypes.func.isRequired,
  addTodoAsync: PropTypes.func.isRequired,
  updateTodoAsync: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    user: state.auth.user,
    todos: state.todo.todos,
  }
);

export default connect(mapStateToProps, {
  fetchTodosAsync,
  addTodoAsync,
  updateTodoAsync,
})(TodoComponent);
