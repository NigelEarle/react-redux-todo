import React from 'react';
import PropTypes from 'prop-types';

const TodoItemComponent = ({ title, complete, created }) => (
  <li>
    <h3>{title}</h3>
    <h4>{created}</h4>
  </li>
);

TodoItemComponent.defaultProps = {
  title: '',
  complete: null,
  created: '',
};

TodoItemComponent.propTypes = {
  title: PropTypes.string,
  complete: PropTypes.bool,
  created: PropTypes.string,
};

export default TodoItemComponent;
