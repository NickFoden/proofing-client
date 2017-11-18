import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import PhotoUploadForm from'./Components/PhotoUploadForm';
import AlbumDisplay from'./Components/AlbumDisplay';
import HeaderNav from './Components/HeaderNav';
import LoginForm from './Components/Login-form';
import RegistrationForm from './Components/Registration-form';
import {Settings} from './Components/Settings';

class App extends Component {

  

  render() {
    return (
      <Router>
        <div className="App">
          <HeaderNav />
            <Route exact path="/settings" component={Settings}/>
            <Route exact path="/LogIn" component={LoginForm}/>
            <Route exact path="/register" component={RegistrationForm}/>
            <Route exact path="/" render={() =>
              <h2>Welcome to Proofing</h2>
            }
          />
          <PhotoUploadForm/>
          { this.props.currentUser  == null ? false : <AlbumDisplay /> } 
        </div>
      </Router>  
    );
  }
}


function mapStateToProps(state) {
  return {
      currentUser: state.userReducer.currentUser
  }
}

export default connect(mapStateToProps)(App);
