import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { loadAlbums, setCurrentAlbum, setCurrentGuestAlbum } from '../actions/index';
import PreviewCard from './PreviewCard';
import PreviewGuestCard from './PreviewGuestCard';
import './AlbumList.css';

class AlbumList extends React.Component {
  componentDidMount() {
    this.props.loadAlbums(this.props.currentUser.username, this.props.authToken);
  }
  setAlbum(data) {
    this.props.setCurrentAlbum(data);
  }
  setGuests(data) {
    this.props.setCurrentGuestAlbum(data);
  }
  render() {
    return (
      <div>
        <div id="album-list">
          <Link className="album-list-title" to="/albums">
            <h2 className="album-list-title">Albums</h2>
          </Link>
          <ul>
            {this.props.photoAlbums.map((album, index) => (
              <li key={index} onClick={() => this.setAlbum(album)}>
                <PreviewCard album={album} />
              </li>
            ))}
          </ul>
        </div>
        <div id="guest-albums">
          <h2 className="album-list-title">Guest Albums</h2>
          <ul>
            {this.props.guestAlbums.map((album, index) => (
              <li key={index} onClick={() => this.setGuests(album)}>
                <PreviewGuestCard album={album} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authToken: state.userReducer.authToken,
    currentUser: state.userReducer.currentUser,
    photoAlbums: state.photoAlbumReducer.albumArray,
    images: state.photoAlbumReducer.currentAlbum.albumArray,
    guestAlbums: state.photoAlbumReducer.guestAlbums,
  };
}

export default withRouter(connect(mapStateToProps, {
  loadAlbums,
  setCurrentAlbum,
  setCurrentGuestAlbum,
})(AlbumList));
