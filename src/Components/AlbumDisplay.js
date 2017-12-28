import React from 'react';
import Images from './Images';
import { connect } from 'react-redux';
import AlbumNameForm from './AlbumNameForm';
import './AlbumDisplay.css';
import {loadPhotos, addAlbum, removeApproved, saveAlbum, sortApproved} from '../actions/index';

class AlbumDisplay extends React.Component {
    componentDidMount() {
        this.props.loadPhotos(this.props.currentUser.username, this.props.authToken)
    }
    sort(){
       this.props.sortApproved(this.props.currentUser.username, this.props.authToken)
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
                <button className="button-sort" onClick={() => this.sort()}> Sort </button>
                {/*Todo -> remove these two unless there are approved images*/}
                <AlbumNameForm {...this.props} />
                <button className="button-remove-approved" onClick={() => this.remove()}> Remove these Approved Photos from Queue</button>
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
