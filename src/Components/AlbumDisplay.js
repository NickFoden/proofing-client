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

    render() {
        return(
            <div id="album">
                <Images approve={this.props.approve} images={this.props.allAlbums}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    allAlbums: state.album.data
});

export default connect(mapStateToProps, { approve, getAlbum })(AlbumDisplay)


// const x = 3;

// export x;