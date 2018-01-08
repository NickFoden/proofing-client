import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logOutCurrentUser, setAuthToken } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

import './HeaderNav.css';

class HeaderNav extends React.Component {
  logOut() {
    this.props.dispatch(logOutCurrentUser());
    this.props.dispatch(setAuthToken(null));
    clearAuthToken();
    this.props.history.push('/');
  }

  render() {
    let logButton;
    if (this.props.currentUser.username === null) {
      logButton = (
        <li>
          <Link className="log-button" to="/LogIn">
            {' '}
            Log In
          </Link>
        </li>
      );
    } else {
      logButton = (
        <li>
          <button className="log-button" onClick={() => this.logOut()}>
            Log out
          </button>
        </li>
      );
    }
    let registerLink;
    if (this.props.currentUser.username === null) {
      registerLink = (
        <li>
          <Link className="header-links" to="/register">
            {' '}
            Register
          </Link>
        </li>
      );
    }

    return (
      <div id="header-nav">
        <ul>
          <li id="home-link">
            <Link className="header-links-home" to="/">
              {' '}
              Home{' '}
            </Link>
          </li>
          {this.props.currentUser.username == null ? (
            false
          ) : (
            <li>
              <Link className="header-links" to="/photos">
                Photos In Queue
              </Link>
            </li>
          )}
          {this.props.currentUser.username == null ? (
            false
          ) : (
            <li>
              <Link className="header-links" to="/albums">
                Albums
              </Link>
            </li>
          )}
          {registerLink}
          {logButton}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  currentUser: state.userReducer.currentUser,
});

export default withRouter(connect(mapStateToProps)(HeaderNav));
