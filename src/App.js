import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import PhotoUploadForm from'./Components/PhotoUploadForm';
import AlbumDisplay from'./Components/AlbumDisplay';
import HeaderNav from './Components/HeaderNav';
import LoginForm from './Components/Login-form';
import RegistrationPage from './Components/RegistrationPage';
import AlbumRender from './Components/AlbumRender';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <HeaderNav />
            <Route exact path="/LogIn" component={LoginForm}/>
            <Route exact path="/register" component={RegistrationPage}/>
            <Route exact path="/photos" component={PhotoUploadForm} />
            <Route exact path="/" component={Home} />
            <Route exact path={`/albums/${this.props.currentAlbum}`} component={AlbumRender} />
            { this.props.currentUser.username  == null ? false : <AlbumDisplay /> } 
        </div>
      </Router>  
    );
  }
}


function mapStateToProps(state) {
  return {
      currentUser: state.userReducer.currentUser,
      currentAlbum: state.photoAlbumReducer.currentAlbum
  }
}

export default connect(mapStateToProps)(App);
