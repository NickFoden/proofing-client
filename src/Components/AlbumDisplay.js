import React from 'react';
import Images from './Images';
import { connect } from 'react-redux';
import axios from 'axios';
import './AlbumDisplay.css';
import {getAlbum, sortApproved} from '../actions/index';
import {API_BASE_URL} from '../config';

class AlbumDisplay extends React.Component {
    componentDidMount() {
        axios.get(`${API_BASE_URL}/photos/${this.props.currentUser.username}`, {
            headers : {
                "Authorization" : `Bearer ${this.props.authToken}` 
            }
        })
            .then((result) => {
                 this.props.getAlbum(result.data);
            })
            .catch(error => console.log(error));
    }
    render() {
        return(
            <div id="album">
                <Images />
                <button className="button-sort" onClick={() => sortApproved(this.props.currentUser.username, this.props.authToken)}> Sort ! </button>
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

export default connect(mapStateToProps, {getAlbum, sortApproved})(AlbumDisplay)