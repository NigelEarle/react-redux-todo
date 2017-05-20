import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerAsync } from '../../actions/auth';
import { HeaderComponent } from '../../components';
import './RegisterComponent.scss';

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
    return (
      <div className="registerContainer">
        <HeaderComponent />
        <h1 className="registerTitle">Register To Create Todos</h1>
        <form onSubmit={this.handleRegisterSubmit} className="registerForm">
          <div className="inputContainer">
            <input
              type="text"
              ref={input => this.username = input}
              className="input"
              placeholder="username"
            />
          </div>
          <div className="inputContainer">
            <input
              type="password"
              ref={input => this.password = input}
              className="input"
              placeholder="password"
            />
          </div>
          <div className="inputContainer">
            <input type="submit" className="submit" value="Register" />
          </div>
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
