import React from 'react';
import './Images.css';
import Proofing from './Proofing'

export function Images (props) {
    const testImage = "http://res.cloudinary.com/proofer/image/upload/v1502816770/gmssxsrnfd5i7rivupjx.jpg"
        
    return (
        <div id="Images">
            <ul> 
                <li>
                    <img className="rawImage" id="imgYes" src={testImage} alt="imageToBeApproved" />
                    <Proofing />
                </li>
            </ul>
        </div>
        );
    }
    
export default Images;