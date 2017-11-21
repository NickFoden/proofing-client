import React from 'react';
import {connect} from 'react-redux';
import { 
    Link,
    withRouter
 } from 'react-router-dom';
 import {logOutCurrentUser, setAuthToken } from '../actions/auth';
 import {clearAuthToken} from '../local-storage';

import './HeaderNav.css';

class HeaderNav extends React.Component {

    logOut() {
        this.props.dispatch(logOutCurrentUser());
        this.props.dispatch(setAuthToken(null));
        clearAuthToken();
        this.props.history.push('/')
    }

    render() {
        let logButton;
        if (this.props.currentUser.username === null) {
            logButton = (
                <li><Link to='/LogIn'> Log In</Link></li>
            
        )} else {
            logButton = (
                <li><button onClick={() => this.logOut()}>Log out</button></li>
            )
        }      
//Add removal of log in button here

    return (
        <div>
            <ul>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/photos'> Photos</Link></li>
                <li><Link to='/register'> Register</Link></li>
                {logButton}
                <li><Link to='/settings'> Settings</Link></li>
            </ul>    
        </div>      
    )}
}    

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.userReducer.currentUser,
});

export default withRouter(connect(mapStateToProps)(HeaderNav));
