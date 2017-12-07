import React from 'react';
import Images from './Images';
import { connect } from 'react-redux';
import axios from 'axios';
import './AlbumDisplay.css';
import {mapAlbum, sortApproved} from '../actions/index';
import {API_BASE_URL} from '../config';

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
       this.props.dispatch(sortApproved(this.props.currentUser.username, this.props.authToken))
    }


    render() {
        return(
            <div id="album">
                <Images />
                <button className="button-sort" onClick={() => this.sort()}> Sort ! </button>
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

function mapDispatchToProps = (dispatch) => {
    return {
        () => dispatch();
    }
}



export default connect(mapStateToProps, {mapAlbum, mapDispatchToProps, sortApproved})(AlbumDisplay);