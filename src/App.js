import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {PhotoUploadForm, AlbumDisplay} from'./Components/Index';
import HeaderNav from './Components/HeaderNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <h2>Welcome to Proofing App The Wild Client Side</h2>
        <PhotoUploadForm/>
        <AlbumDisplay/>
      </div>
    );
  }
}

export default App;
