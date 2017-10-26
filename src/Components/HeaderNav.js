import React from 'react';
import {connect} from 'react-redux';
import {Settings} from './Settings';
import { 
    BrowserRouter as Router,
    Route,
    Link
 } from 'react-router-dom';
 import {setCurrentUser, setAuthToken} from '../actions/auth';
 import {clearAuthToken} from '../local-storage';

import LoginForm from './Login-form';
import RegistrationForm from './Registration-form';

import './HeaderNav.css';

class HeaderNav extends React.Component {

    logOut() {
        this.props.dispatch(setCurrentUser(null));
        this.props.dispatch(setAuthToken(null));
        clearAuthToken();
    }

    render() {
        let logOutButton;
        if (this.props.loggedIn) {
            logOutButton = (
                <li><button onClick={() => this.logOut()}>Log out</button></li>
            );
        }

    return (
        <Router>
            <div>
                <ul>
                    <li><Link to='/'> Home </Link></li>
                    <li><Link to='/photos'> Photos</Link></li>
                    <li><Link to='/register'> Register</Link></li>
                    <li><Link to='/LogIn'> Log In</Link></li>
                    {logOutButton}
                    <li><Link to='/settings'> Settings</Link></li>
                </ul>    

                <Route exact path="/settings" component={Settings}/>
                <Route exact path="/LogIn" component={LoginForm}/>
                <Route exact path="/register" component={RegistrationForm}/>
            </div>
        </Router>        
    )}
}    

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderNav);
