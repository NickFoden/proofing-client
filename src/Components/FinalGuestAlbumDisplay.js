import React from 'react';
import { connect } from 'react-redux';
import { guestApprove} from '../actions/index';
import './Images.css';

class FinalGuestAlbumDisplay extends React.Component {
    approve(data, index){
        let image = data._id;
        let username = this.props.currentUser.username;
        let albumId =  this.props.albumId;
        debugger;
        this.props.guestApprove(image, username, index, albumId)
    }
    render() {
        return(
            <div>
                <ul> 
                    {this.props.images.map((image, index) => 
                        <li key={index}> 
                            <img className="final-album-images" 
                            src={image.image[0].secure_url} alt="final-album-images" />
                            <br />
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
        albumId :state.photoAlbumReducer.currentGuestAlbum.albumId,
        currentUser: state.userReducer.currentUser
    }
}

export default connect(mapStateToProps, {guestApprove})(FinalGuestAlbumDisplay);
