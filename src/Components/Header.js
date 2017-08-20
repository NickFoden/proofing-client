import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Link
 } from 'react-router-dom';

const Header = () => (
    <Router>
        <div>
            <link to='/'> Home </link>
            <link to='/photos'> Photos</link>
            <link to='/register'> Register</link>
            <link to='/LogIn'> Log In</link>
            <link to='/settings'> Settings</link>
        </div>
    </Router>        
)

export default Header;