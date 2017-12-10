import React from 'react';
import { connect } from 'react-redux';
import './AlbumDisplay.css';
import {loadAlbums} from '../actions/index';


class AlbumList extends React.Component {
    componentDidMount() {
       loadAlbums()
    }
    render() {
        return(
            <div id="album-list">
                <h2>Album List</h2>
                <ul>
                {this.props.photoAlbums.map((album, index) => 
                    <li key={index}> 
                        <a>{album.albumId}</a>
                    </li>)}
                    <li>Here is an album + {this.props.photoAlbums.owner}</li>
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        photoAlbums: state.photoAlbumReducer.albumArray
    }
}

export default connect(mapStateToProps, {loadAlbums})(AlbumList);