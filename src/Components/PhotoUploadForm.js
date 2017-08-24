import React from 'react';
import './PhotoUploadForm.css';
import API_BASE_URL from '../config';

class PhotoUploadForm extends React.Component {
    constructor(props){
        super(props);
    }
    

    handleSubmit(e){
        fetch(API_BASE_URL, {
            method: 'POST',
            file: Image,
            body: Image
        });
    }
    render(){

    return (
        <form className="upload" onSubmit={this.handleSubmit}>
            <div className="field">
                <label>Image</label>
                <input className="input" name="image" type="file" />
            </div>
            <div className="field">
                <label>Title</label>
                <input className="input" name="title" type="text" placeholder="(Optional)" />
            </div>
            <button className="upload-button" type="submit">Upload</button>
        </form>
    );
    }
}

export default PhotoUploadForm;