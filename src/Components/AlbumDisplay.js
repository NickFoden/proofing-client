import React from 'react';
import {CloudinaryContext, Transformation, Image} from 'cloudinary-react';
require('dotenv').config();
const {CLOUD_NAME, TESTING} = process.env;

export function AlbumDisplay (props) {
console.log("Here it is", CLOUD_NAME);
console.log("testing", TESTING);
    return (
        <div id="album">
           {/*} <CloudinaryContext cloudName={CLOUD_NAME}>
                <Image publicId="gmssxsrnfd5i7rivupjx">
                </Image>        
            </CloudinaryContext>*/}
        </div>
    );
}


export default AlbumDisplay;
