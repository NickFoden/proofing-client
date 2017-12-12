import React from 'react';
import {connect} from 'react-redux';
import Images from './Images';
import {mountCurrentAlbum} from '../actions/index';

class AlbumRender extends React.Component {
    componentDidMount(){
       this.props.mountCurrentAlbum(this.props.photoAlbums, this.props.currentAlbum)
    }



render(){
    return (
        <div>
            <h2>{this.props.currentAlbum.albumId}</h2>
            <Images images={this.newImageArray} />
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

export default connect(mapStateToProps, {mountCurrentAlbum})(AlbumRender);