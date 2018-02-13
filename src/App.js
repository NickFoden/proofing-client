import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import PhotoUploadForm from './Components/PhotoUploadForm';
import HeaderNav from './Components/HeaderNav';
import LoginForm from './Components/Login-form';
import RegistrationPage from './Components/RegistrationPage';
import AlbumRender from './Components/AlbumRender';
import AlbumList from './Components/AlbumList';
import AlbumGuestRender from './Components/AlbumGuestRender';

// Hopefully
// http://kaffeine.herokuapp.com/
// is keeping https://proofing-server.herokuapp.com/ awake during the day

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HeaderNav />
          <Route exact path="/LogIn" component={LoginForm} />
          <Route exact path="/register" component={RegistrationPage} />
          <Route exact path="/photos" component={PhotoUploadForm} />
          <Route exact path="/" component={Home} />
          <Route path={`/albums/${this.props.currentAlbum.albumTitle}`} component={AlbumRender} />
          <Route
            path={`/albums/guest/${this.props.currentGuestAlbum.albumTitle}`}
            component={AlbumGuestRender}
          />
          <Route path="/albums" component={AlbumList} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.userReducer.currentUser,
    currentAlbum: state.photoAlbumReducer.currentAlbum,
    currentGuestAlbum: state.photoAlbumReducer.currentGuestAlbum,
  };
}

export default connect(mapStateToProps)(App);
