import React from 'react';
import {Image} from 'cloudinary-react';

export function PhotoUploadForm (props) {
    
    return (
        <form action="/create" method="post">
            <div className="field">
                <label>Image</label>
                <input name="image" type="file" />
            </div>
            <div className="field">
                <label>Title</label>
                <input name="title" type="text" placeholder="Title" />
            </div>
            <button className="upload-button" type="submit">Post</button>
        </form>
    );
}
    
export default PhotoUploadForm;