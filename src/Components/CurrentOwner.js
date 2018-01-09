import React from 'react';
import { connect } from 'react-redux';
import './Images.css';

class CurrentOwner extends React.Component {
  render() {
    return (
      <div>
        <h4 className="album-owner">({this.props.owner || this.props.guestOwner}'s Album)</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    owner: state.photoAlbumReducer.currentAlbum.owner,
    guestOwner: state.photoAlbumReducer.currentGuestAlbum.owner,
  };
}
export default connect(mapStateToProps)(CurrentOwner);
