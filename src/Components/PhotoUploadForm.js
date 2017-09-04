import React from 'react';
import './PhotoUploadForm.css';
import Dropzone from 'react-dropzone'
import sha1 from 'sha1'
import superagent from 'superagent'

class PhotoUploadForm extends React.Component {
    constructor(props){
        super(props);
    }
    
    uploadFile(files){
        console.log('uploadFile: ')
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
            console.log('UPLOAD COMPLETE: '+JSON.stringify(resp.body))
            
            const uploaded = resp.body         
        })
    }
    render(){
        return (
            <Dropzone onDrop={this.uploadFile.bind(this)} />   
        )}
}

export default PhotoUploadForm;

/*const uploaded = resp.body

let updatedImages = Object.assign([], this.state.images)
updatedImages.push(uploaded)

this.setState({
    images: updatedImages
})
        const list = this.state.images.map((image, i) => {
            return (
                <li key={i}>
                    <img src={image.secure_url} />
                </li>
            )
        })

*/