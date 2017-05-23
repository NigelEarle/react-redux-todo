import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkSession } from '../../utils/authorized';

import './TodoComponent.scss';

import {
  HeaderComponent,
  TodoItemComponent,
} from '../../components';

import {
  fetchTodosAsync,
  addTodoAsync,
  updateTodoAsync,
  deleteTodoAsync,
} from '../../actions/todo';

class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.renderTodos = this.renderTodos.bind(this);

    this.state = {
      title: '',
      isLoggedIn: true,
    };
  }

  componentDidMount() {
    checkSession()
    .then(() => {
      this.props.fetchTodosAsync();
    })
    .catch(() => {
      this.setState({ isLoggedIn: false });
    });
  }

  handleTodoChange(event) {
    const { value } = event.target;
    this.setState({ title: value });
  }

  handleAddTodo(event) {
    if (event.charCode === 13) {
      const { title } = this.state;

      const payload = {
        title,
        isComplete: false,
      };

      this.props.addTodoAsync(payload);
      this.setState({ title: '' });
    }
  }

  renderTodos(todos, title) {
    return (
      <div>
        <h1 className="title">React Redux Todo</h1>
        <input
          type="text"
          className="addTodo"
          onChange={this.handleTodoChange}
          onKeyPress={this.handleAddTodo}
          value={title}
          placeholder="Create A Todo"
        />
        <ul className="todoList">
          {todos.map(todo => (
            <TodoItemComponent
              key={todo.id}
              id={todo.id}
              title={todo.title}
              isComplete={todo.isComplete}
              created={todo.createdAt}
              update={this.props.updateTodoAsync}
              delete={this.props.deleteTodoAsync}
            />
          ))
          }
        </ul>
      </div>
    );
  }

  render() {
    const { title, isLoggedIn } = this.state;
    const { todos } = this.props;

    return (
      <div className="todoContainer">
        <HeaderComponent />
        { !isLoggedIn ?
          <Redirect to="/login" />
          : this.renderTodos(todos, title)
        }
      </div>
    );
  }
}

TodoComponent.defaultProps = {
  todos: [],
  fetchTodosAsync: () => {},
  addTodoAsync: () => {},
  updateTodoAsync: () => {},
  deleteTodoAsync: () => {},
};

TodoComponent.propTypes = {
  todos: PropTypes.array.isRequired,
  fetchTodosAsync: PropTypes.func.isRequired,
  addTodoAsync: PropTypes.func.isRequired,
  updateTodoAsync: PropTypes.func.isRequired,
  deleteTodoAsync: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    todos: state.todo.todos,
  }
);

export default connect(mapStateToProps, {
  fetchTodosAsync,
  addTodoAsync,
  updateTodoAsync,
  deleteTodoAsync,
})(TodoComponent);
