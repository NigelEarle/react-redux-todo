import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutAsync } from '../../actions/auth';
import './HeaderComponent.scss';

// TODO: Persist logged in user to conditionally set user
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
      <div className="headerContainer">
        <div className="linkContainer">
          <Link to="/" className="link">Home</Link>
        </div>
        <div className="linkContainer">
          <Link to="/login" className="link">Login</Link>
        </div>
        <div className="linkContainer">
          <Link to="/register" className="link">Register</Link>
        </div>
        <div className="linkContainer">
          <Link to="/login" className="link" onClick={this.handleLogout}>Logout</Link>
        </div>
      </div>
    );
  }
}

HeaderComponent.defaultProps = {
  logoutAsync: () => {},
  user: {},
};

HeaderComponent.propTypes = {
  logoutAsync: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = state => (
  {
    user: state.auth.user,
  }
);

export default connect(mapStateToProps, {
  logoutAsync,
})(HeaderComponent);
