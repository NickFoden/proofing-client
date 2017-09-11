import React from 'react';
import './Images.css';

export function Images (props) {
    const testImage = "http://res.cloudinary.com/proofer/image/upload/v1502816770/gmssxsrnfd5i7rivupjx.jpg"
        
    return (
        <div id="Images">
            <ul> 
                <li className="imgYes"><img src={testImage} alt="imageToBeApproved" /></li>
            </ul>
        </div>
        );
    }
    
export default Images;