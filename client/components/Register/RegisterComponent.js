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

  handleRegisterSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.registerAsync(username, password);
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="registerContainer">
        <HeaderComponent />
        <h1 className="registerTitle">Register To Create Todos</h1>
        <form onSubmit={this.handleRegisterSubmit} className="registerForm">
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
            <input type="submit" className="submit" value="Register" />
          </div>
        </form>
      </div>
    );
  }
}

RegisterComponent.defaultProps = {
  registerAsync: () => {},
  user: {},
  history: {},
};

RegisterComponent.propTypes = {
  registerAsync: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = state => (
  {
    user: state.auth.user,
  }
);

export default connect(mapStateToProps, {
  registerAsync,
})(RegisterComponent);
