import React from 'react';
import { connect } from 'react-redux';
import './Images.css';

class FinalGuestAlbumDisplay extends React.Component {
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
            </div>
        )       
    }
}

function mapStateToProps(state) {
    return {
        images: state.photoAlbumReducer.currentGuestAlbum.albumArray,
        albumName :state.photoAlbumReducer.currentGuestAlbum
    }
}

export default connect(mapStateToProps)(FinalGuestAlbumDisplay);
