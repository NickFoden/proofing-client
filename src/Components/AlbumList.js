import React from 'react';
import { connect } from 'react-redux';
import { 
    Link,
    withRouter
 } from 'react-router-dom';
import './AlbumDisplay.css';
import {loadAlbums} from '../actions/index';
import './AlbumList.css';
import {setCurrentAlbum} from '../actions';


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
                <h2>Album List</h2>
                <ul>
                {this.props.photoAlbums.map((album, index) => 
                    <li key={index} onClick={() => this.setAlbum(`${album}`)}> 
                        <Link className="album-links" to={`/albums/${album.albumTitle}`}>
                            {album.albumTitle}
                        </Link>    
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