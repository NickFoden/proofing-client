import React from 'react';
import { connect } from 'react-redux'
import './Images.css';
import Proofing from './Proofing'

export function Images (props) {
    const testImage = "http://res.cloudinary.com/proofer/image/upload/v1502816770/gmssxsrnfd5i7rivupjx.jpg"
    const testStatus = "imgYes" 
    return (
        <div id="Images">
            <ul> 
                <li>
                    <img className="rawImage" id={testStatus} src={testImage} alt="imageToBeApproved" />
                    <Proofing />
                </li>
            </ul>
        </div>
        );
    }
    
export default connect()(Images);
