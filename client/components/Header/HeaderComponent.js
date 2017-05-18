import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutAsync } from '../../actions/auth';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logoutAsync();
  }

  render() {
    return (
      <div className="loginContainer">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <a href="#" onClick={this.handleLogout}>Logout</a>
      </div>
    );
  }
}

HeaderComponent.defaultProps = {
  logoutAsync: () => {},
};

HeaderComponent.propTypes = {
  logoutAsync: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    auth: state.auth,
  }
);

export default connect(mapStateToProps, {
  logoutAsync,
})(HeaderComponent);
