import React from 'react';
import {Settings} from './Settings';
import { 
    BrowserRouter as Router,
    Route,
    Link
 } from 'react-router-dom';

import './HeaderNav.css';

const HeaderNav = () => {
    return (
    <Router>
        <div>
            <ul>
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/photos'> Photos</Link></li>
                <li><Link to='/register'> Register</Link></li>
                <li><Link to='/LogIn'> Log In</Link></li>
                <li><Link to='/settings'> Settings</Link></li>
            </ul>    

            <Route exact path="/settings" component={Settings}/>
        </div>
    </Router>        
)}

export default HeaderNav
