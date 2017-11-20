import React from 'react';
import './PhotoUploadForm.css';
import Dropzone from 'react-dropzone'
import sha1 from 'sha1'
import superagent from 'superagent'
import { connect } from 'react-redux'
import { savePhoto } from '../actions/index'

class PhotoUploadForm extends React.Component {
    
    uploadFile(files){
        const image = files[0]

        const cloudName = 'proofer'
        const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'

        const timestamp = Date.now()/1000
        const uploadPreset = 'on6jfv7m'

        const paramStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'dW9zgguPfWSrOwP8mQ2AyCMYu30'
        const signature = sha1(paramStr)

        const params = {
            'api_key': '821318977471469',
            'timestamp': timestamp,
            'upload_preset': uploadPreset,
            'signature': signature
        }
    
        let uploadRequest = superagent.post(url)
        uploadRequest.attach('file', image)

        Object.keys(params).forEach((key) => {
            uploadRequest.field(key, params[key])
        })

        uploadRequest.end((err, resp) => {
            if (err){
                alert(err)
                return
            }
            //console.log("Line 42 + props currentUser.username " + this.props.currentUser.username)
            resp.body.userName = this.props.currentUser
            //console.log("Line 44 + " + resp.body.user)
            let uploaded = resp.body
            console.log('UPLOAD COMPLETE: '+JSON.stringify(uploaded))
            console.log('Current User user name', this.props.currentUser.username )
            this.props.dispatch(savePhoto(uploaded, this.props.currentUser.username))
             
                   
        })
    }
    render() {
        console.log({user: this.props.currentUser})
        return (
            <div className="drop">
                <Dropzone onDrop={this.uploadFile.bind(this)} >
                    <div className="drop-text">Drop your photo</div>
                </Dropzone>  
            </div>     
        )}
}

function mapStateToProps(state) {
    return {
        currentUser: state.userReducer.currentUser
    }
}

export default connect(mapStateToProps)(PhotoUploadForm);