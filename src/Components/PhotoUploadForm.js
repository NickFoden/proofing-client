import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';
// import { CSSTransitionGroup } from 'react-transition-group';
import './PhotoUploadForm.css';
import AlbumDisplay from './AlbumDisplay';

import { savePhoto } from '../actions/index';

class PhotoUploadForm extends React.Component {
  uploadFile(files) {
    for (let i = 0; i < files.length; i++) {
      const image = files[i];

      const cloudName = 'proofer';
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

      const timestamp = Date.now() / 1000;
      const uploadPreset = 'on6jfv7m';

      const paramStr = `timestamp=${timestamp}&upload_preset=${uploadPreset}dW9zgguPfWSrOwP8mQ2AyCMYu30`;
      const signature = sha1(paramStr);

      const params = {
        api_key: '821318977471469',
        timestamp,
        upload_preset: uploadPreset,
        signature,
      };

      const uploadRequest = superagent.post(url);
      uploadRequest.attach('file', image);

      Object.keys(params).forEach((key) => {
        uploadRequest.field(key, params[key]);
      });

      uploadRequest.end((err, resp) => {
        if (err) {
          alert(err);
          return;
        }
        resp.body.userName = this.props.currentUser;
        const uploaded = resp.body;
        console.log(`UPLOAD COMPLETE: ${JSON.stringify(uploaded)}`);
        console.log('Current User user name', this.props.currentUser.username);
        this.props.dispatch(savePhoto(uploaded, this.props.currentUser.username, this.props.authToken));
      });
    }
  }
  render() {
    return (
      <div>
        {/* <CSSTransitionGroup
                    transitionName="fade"
                    transitionLeaveTimeout={500}> */}
        <h2 id="welcome-message">
          {' '}
          Hi {this.props.currentUser.firstName}, welcome to proofer. Upload some photos to get
          started{' '}
        </h2>
        {/* </CSSTransitionGroup> */}
        <div className="drop">
          <Dropzone onDrop={this.uploadFile.bind(this)}>
            <div className="drop-text">Drop your photo or click to add a photo</div>
          </Dropzone>
        </div>
        {this.props.currentUser.username == null ? false : <AlbumDisplay />}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.userReducer.currentUser,
    authToken: state.userReducer.authToken,
  };
}

export default connect(mapStateToProps)(PhotoUploadForm);
