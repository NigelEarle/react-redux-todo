import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerAsync } from '../../actions/auth';

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
  }

  handleRegisterSubmit(event) {
    event.preventDefault();
    const { username, password } = this;
    this.props.registerAsync(username.value, password.value);
  }

  render() {
    console.log(this.props);
    return (
      <div className="loginContainer">
        <h1>Register</h1>
        <form onSubmit={this.handleRegisterSubmit} className="loginForm">
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

RegisterComponent.defaultProps = {
  registerAsync: () => {},
};

RegisterComponent.propTypes = {
  registerAsync: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    auth: state.auth,
  }
);

export default connect(mapStateToProps, {
  registerAsync,
})(RegisterComponent);
