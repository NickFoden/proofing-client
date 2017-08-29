import React from 'react';
import './PhotoUploadForm.css';
import API_BASE_URL from '../config';

class PhotoUploadForm extends React.Component {
    constructor(props){
        super(props);
    }
    

    handleSubmit(e){
        e.preventDefault();
        fetch(API_BASE_URL, {
            method: 'POST',
            body: file
        });
    }
    render(){

    return (
        <form className="upload" encType="multipart/form-data" onSubmit={this.handleSubmit}>
            <div className="field">
                <label>Image</label>
                <input id="upload" className="input" name="file" type="file" multiple="multiple" />
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