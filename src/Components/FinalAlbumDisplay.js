import React from 'react';
import './Images.css';
import { connect } from 'react-redux';
import AlbumList from './AlbumList';

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
                <AlbumList />
            </div>
        )       
    }
}

function mapStateToProps(state) {
    return {
        images: state.photoAlbumReducer.currentAlbum
    }
}

export default connect(mapStateToProps)(FinalAlbumDisplay);
