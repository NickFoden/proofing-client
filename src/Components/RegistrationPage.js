import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import RegistrationForm from './Registration-form';

export function RegistrationPage(props) {
    // If we are logged in (which happens automatically when registration
    // is successful) redirect to the user's dashboard
    if (props.loggedIn) {
        return <Redirect to="/photos" />;
    }
    
    return (
        <div className="registration-page">
            <RegistrationForm />
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser.username
});

export default connect(mapStateToProps)(RegistrationPage);