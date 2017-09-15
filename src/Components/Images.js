import React from 'react';
import './Images.css';
import Proofing from './Proofing'

export function Images (props) {
 
    const { images } = props;
    return (
        <div id="Images">
            <ul> 
                {images.map((image, index) => <li key={index}>
                    <img className="rawImage" id={image.status} src={image.image[0].secure_url} alt="imageToBeApproved" />
                    <Proofing />
                </li>)}
            </ul>
        </div>
        );
    }
    
export default Images;
