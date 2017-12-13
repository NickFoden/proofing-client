import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {loadAlbums, setCurrentAlbum} from '../actions/index';
import PreviewCard from './PreviewCard';
import './AlbumList.css';


class AlbumList extends React.Component {
    componentDidMount() {
       this.props.loadAlbums(this.props.currentUser.username, this.props.authToken)
    }   
    
    setAlbum(data){
        this.props.setCurrentAlbum(data);
    }

    // onClick={this.props.onClick(`${album.albumId}`)}

    render() {
        return(
            <div id="album-list">
                <h2 className="album-list-title">Album List</h2>
                <ul>
                {this.props.photoAlbums.map((album, index) => 
                    <li key={index} onClick={() => this.setAlbum(`${album}`)}> 
                        <PreviewCard album={album}/>    
                    </li>)}

                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authToken : state.userReducer.authToken,
        currentUser: state.userReducer.currentUser,
        photoAlbums: state.photoAlbumReducer.albumArray
    }
}

export default withRouter(connect(mapStateToProps, {loadAlbums, setCurrentAlbum})(AlbumList));