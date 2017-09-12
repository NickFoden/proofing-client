import React from 'react';
import {Images} from './Images';
import { connect } from 'react-redux'
import './AlbumDisplay.css';
import Lightbox from 'react-image-lightbox';

function AlbumDisplay (props) {
    /*let testing = [
        {imageUrl: "http://res.cloudinary.com/proofer/image/upload/v1502816770/gmssxsrnfd5i7rivupjx.jpg",
        status: "imgYes" },
        {imageUrl: "http://res.cloudinary.com/proofer/image/upload/v1505159131/grcqij4qz4ugcdy4ma3f.jpg",
        status: "imgNo" }
    ] */

    return (
        <div id="album">
            <Images /*{testing}*/ />
        </div>
    );
}

export default connect()(AlbumDisplay)
