import React from 'react';
import {connect} from 'react-redux';
import Images from './Images';

class AlbumRender extends React.Component {

render(){
    return (
        <Images images={this.props.images}/>
        )
    }

}

function mapStateToProps(state){
    return {
        images: state.photoAlbumReducer.currentAlbum
    } 
};

export default connect(mapStateToProps)(AlbumRender);