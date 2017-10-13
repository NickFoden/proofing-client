import React from 'react';
import './Images.css';
import { connect } from 'react-redux'

class Images extends React.Component {
    constructor(){
        super();
    }
    render() {
        // const className = image.approved ? 'img-approved' : 'img-not-approved'

        return(
            <div>
                <ul> 
                    {this.props.images.map((image, index) => <li key={index}>
                        <img className={image.class} src={image.image[0].secure_url} alt="imageToBeApproved" />
                        <br />
                        <button id="yes" onClick={(e) => this.props.approve(image)}> </button>
                        <button id="no" onClick={(e) => this.props.disprove(image)} > </button>
                    </li>)}
                </ul>
            </div>
        )       
    }
}

export default connect()(Images);
