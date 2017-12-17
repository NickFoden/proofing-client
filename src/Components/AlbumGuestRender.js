import React from 'react';
import {connect} from 'react-redux';
import FinalGuestAlbumDisplay from './FinalGuestAlbumDisplay';
import './Images.css';

class AlbumGuestRender extends React.Component {

render(){
    return (
        <div>
            <h2 className="final-album-title">{this.props.currentGuestAlbum.albumTitle}</h2>
            <FinalGuestAlbumDisplay />
        </div>    
        )
    }

}

function mapStateToProps(state){
    return {
        currentGuestAlbum: state.photoAlbumReducer.currentGuestAlbum
    } 
};

export default connect(mapStateToProps)(AlbumGuestRender);