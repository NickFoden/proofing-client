import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import RegistrationForm from "./Registration-form";

export function RegistrationPage(props) {
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
