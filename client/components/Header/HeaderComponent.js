import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutAsync } from '../../actions/auth';
import './HeaderComponent.scss';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    localStorage.clear();
    this.props.logoutAsync();
  }

  render() {
    return (
      <div>
        {(localStorage.getItem('isAuthenticated')) ?
          <div className="headerContainer">
            <div className="linkContainer">
              <Link to="/" className="link">Home</Link>
            </div>
            <div className="linkContainer">
              <Link to="/login" className="link" onClick={this.handleLogout}>Logout</Link>
            </div>
          </div>
          :
          <div className="headerContainer">
            <div className="linkContainer">
              <Link to="/login" className="link">Login</Link>
            </div>
            <div className="linkContainer">
              <Link to="/register" className="link">Register</Link>
            </div>
          </div>
        }
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
