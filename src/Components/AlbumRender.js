import React from 'react';
import {connect} from 'react-redux';
import FinalAlbumDisplay from './FinalAlbumDisplay';

class AlbumRender extends React.Component {
    componentDidMount(){
    //    this.props.mountCurrentAlbum(this.props.photoAlbums, this.props.currentAlbum)
    }

render(){
    return (
        <div>
            <h2>{this.props.currentAlbum.albumTitle}</h2>
            <FinalAlbumDisplay />
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