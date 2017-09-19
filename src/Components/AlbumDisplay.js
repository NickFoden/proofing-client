import React from 'react';
import {Images} from './Images';
import { connect } from 'react-redux';
import axios from 'axios';
import { getAlbum } from '../actions/index';
import './AlbumDisplay.css';
/*import Lightbox from 'react-image-lightbox';*/

class AlbumDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get('http://localhost:8080')
            .then((result) => {
                 this.props.getAlbum(result.data);
            });
    }

    render() {
        return(
            <div id="album">
                <Images images={this.props.allAlbums}/>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAlbum: (data) => {
            return dispatch(getAlbum(data));
        }
    }
}
const mapStateToProps = (state) => {
    return {
        allAlbums: state.album.data
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumDisplay)
