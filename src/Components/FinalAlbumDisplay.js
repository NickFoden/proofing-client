import React from "react";
import { connect } from "react-redux";
import "./Images.css";
import InviteGuestForm from "./InviteGuestForm";
import { loadGuestApprovers } from "../actions/users";
import GuestAlbumCaption from "./GuestAlbumCaption";
import CurrentGuests from "./CurrentGuests";

class FinalAlbumDisplay extends React.Component {
  componentDidMount() {
    this.props.loadGuestApprovers();
    debugger;
  }

  render() {
    // let GuestAlbumCaption = (image) => {
    // <div className='guest-album-caption'>
    //     <h4>Approved by: </h4>
    //     <p>{([...new Set(image.guestApproved)]).map(name => (name + " "))} </p>
    // </div>
    // }
    return (
      <div>
        <ul>
          {this.props.images.map((image, index) => (
            <li key={index}>
              <img
                className="final-album-images"
                src={image.image[0].secure_url}
                alt="final-album-images"
              />

              {image.guestApproved == null ? (
                false
              ) : (
                <GuestAlbumCaption image={image} />
              )}
              {/* <div className='guest-album-caption'>
                                    <h4>Approved by: </h4>
                                    <p>{([...new Set(image.guestApproved)]).map(name => (name + " "))}</p>
                                </div> */}

              {/* <GuestAlbumCaption image={image} />
                                <div className='guest-album-caption'>
                                    <h4>Approved by: </h4>
                                    <p>{([...new Set(image.guestApproved)]).map(name => (name + " "))} </p>
                                </div> */}
            </li>
          ))}
        </ul>
        <CurrentGuests {...this.props} />
        <InviteGuestForm {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.photoAlbumReducer.currentAlbum.albumArray,
    albumName: state.photoAlbumReducer.currentAlbum,
    approvers: state.userReducer.guestApprovers,
    authToken: state.userReducer.authToken,
    currentUser: state.userReducer.currentUser
  };
}

export default connect(mapStateToProps, { loadGuestApprovers })(
  FinalAlbumDisplay
);
