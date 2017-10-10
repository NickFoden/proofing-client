import React from 'react';
import Images from './Images';
import { connect } from 'react-redux';
import axios from 'axios';
import { getAlbum, approve } from '../actions/index';
import './AlbumDisplay.css';

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
    
    approve = (image) => {
        return (
          image.class = "rawImageYes"
        )
      }

    /*componentWillUpdate() {
        axios.get('http://localhost:8080')
            .then((result) => {
                 this.props.getAlbum(result.data);
            });
    }*/

    render() {
        return(
            <div id="album">
                <Images approve={this.props.approve} images={this.props.allAlbums}/>
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
