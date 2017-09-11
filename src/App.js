import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { connect } from 'react-redux'
import PhotoUploadForm from'./Components/PhotoUploadForm'
import AlbumDisplay from'./Components/AlbumDisplay'
import HeaderNav from './Components/HeaderNav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNav />
        <h2>Welcome to Proofing</h2>
        <PhotoUploadForm/>
        <AlbumDisplay/>
      </div>
    );
  }
}


export default App;
