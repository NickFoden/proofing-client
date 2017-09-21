import React from 'react';
import './Images.css';

export function Images (props) {

    const { images } = props;

    /*approve(image) {
        return;
    }

    disprove(image) {
        return;
    }*/

    return (
        <div>
            <ul> 
                {images.map((image, index) => <li key={index}>
                    <img className={image.class} id={image.status} src={image.image[0].secure_url} alt="imageToBeApproved" />
                    <button id="yes" onClick={() => this.approve(image.image[0]._id)}> </button>
                    <button id="no" onClick={() => this.disprove(image.image[0]._id)} > </button>
                </li>)}
            </ul>
        </div>    
     )
}

    
export default Images;

