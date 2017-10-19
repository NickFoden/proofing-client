import React from 'react';
import Images from './Images';
import { connect } from 'react-redux';
import axios from 'axios';
import './AlbumDisplay.css';
import {getAlbum} from '../actions/index';

class AlbumDisplay extends React.Component {
    /*constructor() {
        super()
    start();
    }
    start() {
        axios.get('http://localhost:8080')
            .then((result) => {
                 this.props.getAlbum(result.data);
            });
    }
    store.subscribe(start);*/

    componentDidMount() {
        axios.get('http://localhost:8080')
            .then((result) => {
                 this.props.getAlbum(result.data);
            });
    }

    render() {
        return(
            <div id="album">
                <Images />
            </div>
        );
    }
}

/*const mapStateToProps = (state) => ({
    allAlbums: state.album.data
});*/

export default connect(null, {getAlbum})(AlbumDisplay)