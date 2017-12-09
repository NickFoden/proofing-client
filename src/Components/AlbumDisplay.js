import React from 'react';
import Images from './Images';
import AlbumList from './AlbumList';
import { connect } from 'react-redux';
import './AlbumDisplay.css';
import {loadPhotos, mapAlbum, saveAlbum, sortApproved} from '../actions/index';

class AlbumDisplay extends React.Component {
    componentDidMount() {
        loadPhotos(this.props.username, this.props.authToken)
    }
    sort(){
       this.props.sortApproved(this.props.currentUser.username, this.props.authToken)
    }
    save(){
        let imageArray = this.props.images;
        console.log(imageArray + " image array before sort")
        let newImageArray = ((this.props.images).filter(photo => photo.approved))
        console.log(newImageArray + ' new image array');
        this.props.saveAlbum(this.props.currentUser.username, this.props.authToken, newImageArray)
     }
     
    render() {
        return(
            
            <div id="album">
                <Images />
                {/* <AlbumList /> */}
                <button className="button-sort" onClick={() => this.sort()}> Sort </button>
                <button className="button-save-album" onClick={() => this.save()}> Save as Album </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.userReducer.currentUser,
        authToken : state.userReducer.authToken,
        images: state.photoReducer.photosState
    }
}

export default connect(mapStateToProps, {loadPhotos,mapAlbum, saveAlbum, sortApproved})(AlbumDisplay);