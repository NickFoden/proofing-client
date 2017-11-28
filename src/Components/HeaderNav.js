import React from 'react';
import {connect} from 'react-redux';
import { 
    Link,
    withRouter
 } from 'react-router-dom';
 import {logOutCurrentUser, setAuthToken } from '../actions/auth';
 import {clearAuthToken} from '../local-storage';
 import { slide as Menu } from 'react-burger-menu';

import './HeaderNav.css';

class HeaderNav extends React.Component {

    logOut() {
        this.props.dispatch(logOutCurrentUser());
        this.props.dispatch(setAuthToken(null));
        clearAuthToken();
        this.props.history.push('/')
    }
    showSettings(event) {
        event.preventDefault();
      }

    render() {
        let logButton;
        if (this.props.currentUser.username === null) {
            logButton = (
                /*<li>*/<Link  className="menu-item" to='/LogIn'> Log In</Link>/*</li>*/
            
        )} else {
            logButton = (
                /*<li>*/<button  className="menu-item" onClick={() => this.logOut()}>Log out</button>/*</li>*/
            )
        }      

        return (
            <Menu width={150} >
                <Link className="menu-item" to='/'>Home </Link>
                <Link className="menu-item" to='/photos'> Photos</Link>
                <Link className="menu-item" to='/register'> Register</Link>
                {logButton}
                {/* <Link className="menu-item" to='/settings'> Settings</Link> */}
                <a onClick={ this.showSettings } className="menu-item--small" href="/settings">Settings</a>
            </Menu>    
        )
    {/* return (
        <div>
            <ul>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/photos'> Photos</Link></li>
                <li><Link to='/register'> Register</Link></li>
                {logButton}
                <li><Link to='/settings'> Settings</Link></li>
            </ul>    
        </div>      
    )} */}
    }
}    

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.userReducer.currentUser,
});

export default withRouter(connect(mapStateToProps)(HeaderNav));
