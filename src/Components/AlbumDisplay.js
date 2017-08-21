import React from 'react';
import {Approve} from './Approve';
import './AlbumDisplay.css';
import {CloudinaryContext, Transformation, Image} from 'cloudinary-react';
require('dotenv').config();
let CLOUD_NAME = process.env.CLOUD_NAME;


export function AlbumDisplay (props) {
console.log(CLOUD_NAME);
    return (
        <div id="album">
            <div className="Photo">
                <CloudinaryContext cloudName={'proofer'}>
                    <Image publicId="gmssxsrnfd5i7rivupjx">
                    </Image>        
                </CloudinaryContext>
                <Approve />
            </div>
        </div>
    );
}

export default AlbumDisplay;
