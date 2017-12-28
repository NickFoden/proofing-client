import React from 'react';
import { Link } from 'react-router-dom';
import './Images.css';
import './AlbumList.css';

class PreviewCard extends React.Component {

    render() {
        return(
            <div className="preview-card">
                    <Link className="album-links" to={`/albums/${this.props.album.albumTitle}`}>
                            <h3> {this.props.album.albumTitle} </h3><h5> contains {this.props.album.albumArray.length} photos</h5>
                    </Link>
                <ul> 
                    {this.props.album.albumArray.slice(0,4).map((image, index) => 
                        <li key={index}> 
                            <img className="preview-thumbnails" src={image.image[0].secure_url} alt="thumbnails from album" />
                        </li>)}
                </ul>
            </div>
        )       
    }
}

export default PreviewCard;