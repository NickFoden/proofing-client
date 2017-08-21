import React from 'react';
import './PhotoUploadForm.css';
import {Image} from 'cloudinary-react';


export function PhotoUploadForm (props) {
    return (
        <form className="upload" action="/create" method="post">
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
    
export default PhotoUploadForm;