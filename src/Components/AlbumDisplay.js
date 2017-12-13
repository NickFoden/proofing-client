import React from 'react';
import Images from './Images';
import AlbumList from './AlbumList';
import { connect } from 'react-redux';
import './AlbumDisplay.css';
import {loadPhotos, addAlbum, removeApproved, saveAlbum, sortApproved} from '../actions/index';

class AlbumDisplay extends React.Component {
    componentDidMount() {
        this.props.loadPhotos(this.props.currentUser.username, this.props.authToken)
    }
    sort(){
       this.props.sortApproved(this.props.currentUser.username, this.props.authToken)
    }
    save(){
        let newImageArray = (this.props.images.filter(photo => photo.approved))
        this.props.saveAlbum( this.input.value, this.props.currentUser.username, this.props.authToken, newImageArray)
     }

    remove(){
        let newImageArray = (this.props.images.filter(photo => photo.approved))
        this.props.removeApproved( this.props.currentUser.username, this.props.authToken, newImageArray)
     }

    //  https://github.com/KanoComputing/nodejs-profanity-util
     
    render() {
        return(
            
            <div id="album">
                <Images />
                <AlbumList />
                <button className="button-sort" onClick={() => this.sort()}> Sort </button>
                <form id="album-form" onSubmit={() => this.save()}>
                    <label>
                        Album Title:
                        <input type="text" ref={(input) => this.input = input} />
                    </label>
                    
                    <button className="button-save-album">Save as Album </button>
                </form>
                <button className="button-remove-approved" onClick={() => this.remove()}> Remove Approved from Queue</button>
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

export default connect(mapStateToProps, {loadPhotos, addAlbum, removeApproved, saveAlbum, sortApproved})(AlbumDisplay);