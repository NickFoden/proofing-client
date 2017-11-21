import React from 'react';
import './Images.css';
import { connect } from 'react-redux';
import { approve, disprove } from '../actions/index';

class Images extends React.Component {

    //sort array by approve property after clicking save button
    //this.props.images.sort(function(a, b) {
    //    return b.approved - a.approved
    //})


    render() {
        return(
            <div>
                <ul> 
                    {this.props.images.slice(0).reverse().map((image, index) => 
                        <li key={index}> 
                            <img className={image.approved ? 'rawImageYes ' : 'rawImageNo'} 
                            src={image.image[0].secure_url} alt="imageToBeApproved" />
                            <br />
                            <button id="yes" onClick={(e) => this.props.approve(image)}> </button>
                            <button id="no" onClick={(e) => this.props.disprove(image)} > </button>
                        </li>)}
                </ul>
            </div>
        )       
    }
}

function mapStateToProps(state) {
    return {
        images: state.album.data
    }
}


export default connect(mapStateToProps, {approve, disprove})(Images);
