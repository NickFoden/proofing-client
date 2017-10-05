import React from 'react';
import './Images.css';
import { connect } from 'react-redux'

class Images extends React.Component {
    constructor(){
        super();
        this.approve = this.approve.bind(this);
        this.disprove = this.disprove.bind(this);
    }
    approve(image) {
        console.log(image);
    }

    disprove(image) {
        console.log(image);
    }

    render() {
        return(
            <div>
                <ul> 
                    {this.props.images.map((image, index) => <li key={index}>
                        <img className={image.class} src={image.image[0].secure_url} alt="imageToBeApproved" />
                        <br />
                        <button id="yes" onClick={(e) => this.approve(image)}> </button>
                        <button id="no" onClick={(e) => this.disprove(image)} > </button>
                    </li>)}
                </ul>
            </div>
        )       
    }
}

export default connect()(Images);
