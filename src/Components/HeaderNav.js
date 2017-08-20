import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Link
 } from 'react-router-dom';

const HeaderNav = () => (
    <Router>
        <div>

        {/*<Route path="/contacts" component={}>
            <IndexRoute component={ContactListContainer} />
            <Route path=":contactId" component={ContactContainer} />
        </Route>*/}
            <p> Hello</p>
           {/* <link to='/'> Home </link>
            <link to='/photos'> Photos</link>
            <link to='/register'> Register</link>
            <link to='/LogIn'> Log In</link>
            <link to='/settings'> Settings</link>*/}
        </div>
    </Router>        
)

export default HeaderNav
