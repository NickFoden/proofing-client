import React from 'react';
import {Images} from './Images';
import './AlbumDisplay.css';
import Lightbox from 'react-image-lightbox';

export default function AlbumDisplay (props) {
    return (
        <div id="album">
            <Images />
        </div>
    );
}

