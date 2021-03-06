import React from 'react';
import { connect } from 'react-redux';
import { guestApprove } from '../actions/index';
import { loadGuestApprovers } from '../actions/users';
import CurrentOwner from './CurrentOwner';
import CurrentGuestsGuestAlbum from './CurrentGuestsGuestAlbum';
import './Images.css';

class FinalGuestAlbumDisplay extends React.Component {
  componentDidMount() {
    this.props.loadGuestApprovers();
  }
  approve(data, index) {
    const image = data._id;
    const username = this.props.currentUser.username;
    const realName = `${this.props.currentUser.firstName} ${this.props.currentUser.lastName}`;
    const authToken = this.props.authToken;
    const albumId = this.props.albumId;
    this.props.guestApprove(image, username, index, albumId, authToken, realName);
  }
  render() {
    return (
      <div>
        <CurrentOwner {...this.props} />
        <ul className="final-album-images-ul">
          {this.props.images.map((image, index) => (
            <li key={index}>
              <img
                className="final-album-images"
                src={image.image[0].secure_url}
                alt="final-album-images"
              />
              <div className="guest-album-caption">
                <h4>Approved by: </h4>
                <p>{[...new Set(image.guestApproved)].map(name => `${name} `)} </p>
              </div>
              <button id="guestYes" onClick={e => this.approve(image, index)}>
                Ok
              </button>
            </li>
          ))}
        </ul>
        <CurrentGuestsGuestAlbum {...this.props} />
        {/* has to be guest current guests component */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.photoAlbumReducer.currentGuestAlbum.albumArray,
    albumId: state.photoAlbumReducer.currentGuestAlbum._id,
    currentUser: state.userReducer.currentUser,
    approvers: state.userReducer.guestApprovers,
    authToken: state.userReducer.authToken,
  };
}

export default connect(mapStateToProps, { guestApprove, loadGuestApprovers })(FinalGuestAlbumDisplay);
