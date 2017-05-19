import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAsync } from '../../actions/auth';
import './LoginComponent.scss';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { username, password } = this;
    this.props.loginAsync(username.value, password.value);
  }

  render() {
    return (
      <div className="loginContainer">
        <h1>Login</h1>
        <form onSubmit={this.handleLoginSubmit} className="loginForm">
          <input
            type="text"
            ref={input => this.username = input}
            className="usernameLogin"
            placeholder="username"
          />
          <input
            type="password"
            ref={input => this.password = input}
            className="passwordLogin"
            placeholder="password"
          />
          <input type="submit" className="loginSubmit" />
        </form>
      </div>
    );
  }
}

LoginComponent.defaultProps = {
  loginAsync: () => {},
};

LoginComponent.propTypes = {
  loginAsync: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    auth: state.auth,
  }
);

export default connect(mapStateToProps, {
  loginAsync,
})(LoginComponent);
