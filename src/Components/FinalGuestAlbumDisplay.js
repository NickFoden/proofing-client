import React from 'react';
import { connect } from 'react-redux';
import { guestApprove} from '../actions/index';
import './Images.css';

class FinalGuestAlbumDisplay extends React.Component {
    approve(data, index){

        let image = data._id;
        let username = this.props.currentUser.username;
        let authToken = this.props.authToken;
        let albumId =  this.props.albumId;
        this.props.guestApprove(image, username, index, albumId, authToken)
    }
    render() {
        return(
            <div>
                <ul> 
                    {this.props.images.map((image, index) => 
                        <li key={index}> 
                            <img className="final-album-images" 
                            src={image.image[0].secure_url} alt="final-album-images" />
                            <div className='guest-album-caption'>
                                <h4>Approved by: </h4>
                                <p>{([...new Set(image.guestApproved)]).map(name => (name + " "))} </p>
                            </div>
                            <button id="guestYes" onClick={(e) => this.approve(image, index)}>Ok</button>
                            {/* <button id="guestNo" onClick={(e) => this.props.guestDisprove(image)}>Nope</button> */}
                        </li>)}
                </ul>
            </div>
        )       
    }
}

function mapStateToProps(state) {
    return {
        images: state.photoAlbumReducer.currentGuestAlbum.albumArray,
        albumId :state.photoAlbumReducer.currentGuestAlbum._id,
        currentUser: state.userReducer.currentUser,
        authToken : state.userReducer.authToken
    }
}

export default connect(mapStateToProps, {guestApprove})(FinalGuestAlbumDisplay);
