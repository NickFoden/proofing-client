import React from 'react';
import { connect } from 'react-redux';
import './Images.css';
import InviteGuestForm from './InviteGuestForm';

class FinalAlbumDisplay extends React.Component {
    render() {
        return(
            <div>
                <ul> 
                    {this.props.images.map((image, index) => 
                        <li key={index}> 
                            <img className="final-album-images" 
                            src={image.image[0].secure_url} alt="final-album-images" />
                    </li>)}
                </ul>
                <InviteGuestForm {...this.props} />
            </div>
        )       
    }
}

function mapStateToProps(state) {
    return {
        images: state.photoAlbumReducer.currentAlbum.albumArray,
        albumName :state.photoAlbumReducer.currentAlbum,
        authToken : state.userReducer.authToken,
        currentUser: state.userReducer.currentUser,
    }
}

export default connect(mapStateToProps)(FinalAlbumDisplay);
