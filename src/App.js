import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Home from './Components/Home'
import PhotoUploadForm from'./Components/PhotoUploadForm';
import HeaderNav from './Components/HeaderNav';
import LoginForm from './Components/Login-form';
import RegistrationPage from './Components/RegistrationPage';
import AlbumRender from './Components/AlbumRender';
import AlbumList from './Components/AlbumList';

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
            <Route exact path="/albums" component={AlbumList} />
            <Route path={`/albums/${this.props.currentAlbum.albumTitle}`} component={AlbumRender} />
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
