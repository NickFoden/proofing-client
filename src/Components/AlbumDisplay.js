import React from 'react';
import {Approve} from './Approve';
import './AlbumDisplay.css';
import {CloudinaryContext, Transformation, Image} from 'cloudinary-react';
require('dotenv').config();
const {CLOUD_NAME, TESTING} = process.env;

export function AlbumDisplay (props) {
console.log("Here it is", CLOUD_NAME);
console.log("testing", TESTING);
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
