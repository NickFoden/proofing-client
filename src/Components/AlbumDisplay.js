import React from 'react';
import Images from './Images';
import AlbumList from './AlbumList';
import { connect } from 'react-redux';
import axios from 'axios';
import './AlbumDisplay.css';
import {mapAlbum, saveAlbum, sortApproved} from '../actions/index';
import {API_BASE_URL} from '../config';

//Move axios get to actions index

class AlbumDisplay extends React.Component {
    componentDidMount() {
        axios.get(`${API_BASE_URL}/photos/${this.props.currentUser.username}`, {
            headers : {
                "Authorization" : `Bearer ${this.props.authToken}` 
            }
        })
            .then((result) => {
                this.props.mapAlbum(result.data);
            })
            .catch(error => console.log(error));
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
        // console.log(JSON.stringify(this.props.images[1]) + " this props images")
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
        images: state.album.data
    }
}

export default connect(mapStateToProps, {mapAlbum, saveAlbum, sortApproved})(AlbumDisplay);