import React from 'react';
import {Approve} from './Approve';
import {API_BASE_URL} from '../config';

export function Images (props) {
        return fetch('${API_BASE_URL}')
        .then (res => {
            return res.json;
        })
        .then(images =>
            this.setState(
                images: images.url;
        });
        const images = this.state.url.map(image, id => (
           <Image
                key={id}
                url={image.url}
                {...images}
            />   
        ));
        body = (
            <div className="images">
                {images}
            </div>    
        )
        return (
            <div id="Images">
                {body}
            </div>
        );
    }
    
    export default Images;