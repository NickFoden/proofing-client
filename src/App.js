import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {PhotoUploadForm, AlbumDisplay} from'./Components/Index';
//import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Header />*/}
        <h2>Welcome to Proofing App The Wild Client Side</h2>
        <PhotoUploadForm/>
        <AlbumDisplay/>
      </div>
    );
  }
}

export default App;
