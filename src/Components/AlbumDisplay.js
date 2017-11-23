import React from 'react';
import Images from './Images';
import { connect } from 'react-redux';
import axios from 'axios';
import './AlbumDisplay.css';
import {getAlbum} from '../actions/index';
import {API_BASE_URL} from '../config';

class AlbumDisplay extends React.Component {
    componentDidMount() {
        axios.get(`${API_BASE_URL}/photos/${this.props.currentUser.username}`)
            .then((result) => {
                 this.props.getAlbum(result.data);
            })
            .catch(error => console.log(error));
    }

    render() {
        return(
            <div id="album">
                <Images />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        currentUser: state.userReducer.currentUser
    }
}

export default connect(mapStateToProps, {getAlbum})(AlbumDisplay)