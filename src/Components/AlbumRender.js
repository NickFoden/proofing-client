import React from 'react';
import {connect} from 'react-redux';
import FinalAlbumDisplay from './FinalAlbumDisplay';
import './Images.css';

class AlbumRender extends React.Component {

render(){
    return (
        <div>
            <h2 className="final-album-title">{this.props.currentAlbum.albumTitle}</h2>
            <FinalAlbumDisplay />
        </div>    
        )
    }

}

function mapStateToProps(state){
    return {
        currentAlbum: state.photoAlbumReducer.currentAlbum
    } 
};

export default connect(mapStateToProps)(AlbumRender);