import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItemComponent extends Component {
  constructor(props) {
    super(props);
    this.handleUpdateEnter = this.handleUpdateEnter.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCompleteUpdate = this.handleCompleteUpdate.bind(this);
    this.handleEditing = this.handleEditing.bind(this);

    const { title, isComplete } = this.props;

    this.state = {
      isEditing: false,
      todo: {
        title,
        isComplete,
      },
    };
  }

  handleUpdateEnter(event) {
    if (event.charCode === 13) {
      this.props.update(this.state.todo);
      this.setState({
        isEditing: false,
      });
    }
  }

  handleCompleteUpdate() {
    const { todo } = this.state;
    this.setState({
      todo: {
        ...this.state.todo,
        isComplete: !todo.isComplete,
      },
    }, () => this.props.update(this.state.todo));
  }

  handleTitleChange(event) {
    const { value } = event.target;
    this.setState({
      todo: {
        ...this.state.todo,
        title: value,
      },
    });
  }

  handleEditing() {
    const { isEditing } = this.state;
    this.setState({ isEditing: !isEditing });
  }

  render() {
    const { isEditing, todo } = this.state;
    return (
      <li>
        { isEditing ?
          <input
            type="text"
            onChange={this.handleTitleChange}
            onKeyPress={this.handleUpdateEnter}
            defaultValue={todo.title}
          />
          : <h3>{this.props.title}</h3>
        }
        <h4>{this.props.created}</h4>
        <label htmlFor="edit">Edit</label>
        <input
          type="checkbox"
          name="edit"
          checked={isEditing}
          onChange={this.handleEditing}
        />
        <label htmlFor="complete">Complete</label>
        <input
          type="checkbox"
          name="complete"
          checked={todo.isComplete}
          onChange={this.handleCompleteUpdate}
        />
      </li>
    );
  }
}


TodoItemComponent.defaultProps = {
  title: '',
  isComplete: null,
  created: '',
  update: () => {},
};

TodoItemComponent.propTypes = {
  title: PropTypes.string,
  isComplete: PropTypes.bool,
  created: PropTypes.string,
  update: PropTypes.func,
};

export default TodoItemComponent;
