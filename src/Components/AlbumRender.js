import React from 'react';
import {connect} from 'react-redux';
import FinalAlbumDisplay from './FinalAlbumDisplay';

class AlbumRender extends React.Component {
    componentDidMount(){
    //    this.props.mountCurrentAlbum(this.props.photoAlbums, this.props.currentAlbum)
    }

    // mountCurrentAlbum = (albums, currentAlbum) => {
    //     return dispatch => {
    //       let newImageArray = (albums.filter(album => album.currentAlbum))
    //     } 
    //   }

render(){
    return (
        <div>
            <h2>{this.props.currentAlbum.albumId}</h2>
            <FinalAlbumDisplay images={this.newImageArray} />
        </div>    
        )
    }

}

function mapStateToProps(state){
    return {
        currentAlbum: state.photoAlbumReducer.currentAlbum,
        photoAlbums: state.photoAlbumReducer.albumArray
    } 
};

export default connect(mapStateToProps)(AlbumRender);