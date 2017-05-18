import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTodosAsync } from '../../actions/todo';

class TodoComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { user } = this.props;
    this.props.fetchTodosAsync(user.id);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Todo Component</h1>
      </div>
    );
  }
}

TodoComponent.defaultProps = {
  fetchTodosAsync: () => {},
  user: {},
  todos: [],
};

TodoComponent.propTypes = {
  fetchTodosAsync: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  // todos: PropTypes.shape.isRequired,
};

const mapStateToProps = state => (
  {
    user: state.auth.user,
    todos: state.todo,
  }
);

export default connect(mapStateToProps, {
  fetchTodosAsync,
})(TodoComponent);
