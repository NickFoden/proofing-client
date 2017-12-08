import React from 'react';
import { connect } from 'react-redux';
import './AlbumDisplay.css';
import {getAlbums} from '../actions/index';


class AlbumList extends React.Component {
    componentDidMount() {
       getAlbums()
    }
    
    render() {
        return(
            <div id="album-list">
                <ul>
                {this.props.photoAlbums.map((album, index) => 
                    <li key={index}> 
                        <a>{album.albumId}</a>
                    </li>)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        photoAlbums: state.photoAlbum.photoAlbums
    }
}

export default connect(mapStateToProps, {getAlbums})(AlbumList);