import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginAsync } from '../../actions/auth';
import { HeaderComponent } from '../../components';
import './LoginComponent.scss';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidUpdate() {
    const { user } = this.props;
    if (user.username) {
      this.props.history.push('/');
    }
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.loginAsync(username, password);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  render() {
    const { error } = this.props;
    return (
      <div>
        <div className="loginContainer">
          <HeaderComponent />
          <h1 className="loginTitle">Login To See Your Todos</h1>
          {error && 
            <p className="error">Username / password is invalid</p>
          }
          <form onSubmit={this.handleLoginSubmit} className="loginForm">
            <div className="inputContainer">
              <input
                type="text"
                name="username"
                onChange={this.handleInputChange}
                className="input"
                placeholder="username"
              />
            </div>
            <div className="inputContainer">
              <input
                type="password"
                name="password"
                onChange={this.handleInputChange}
                className="input"
                placeholder="password"
              />
            </div>
            <div className="inputContainer">
              <input type="submit" className="submit" value="Log In" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

LoginComponent.defaultProps = {
  loginAsync: () => {},
  user: {},
  error: {},
};

LoginComponent.propTypes = {
  loginAsync: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  error: PropTypes.object,
};

const mapStateToProps = state => (
  {
    user: state.auth.user,
    error: state.auth.error,
  }
);

export default connect(mapStateToProps, {
  loginAsync,
})(LoginComponent);
