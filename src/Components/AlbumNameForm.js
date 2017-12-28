import React from 'react';
import { withRouter } from 'react-router';
import {Field, focus, reduxForm, SubmissionError} from 'redux-form';
import Input from './input';
import {required, nonEmpty} from '../validators';
import {saveAlbum} from '../actions/index';
import './Form.css';

export class AlbumNameForm extends React.Component {
    async onSubmit(values) {
        let newImageArray = (this.props.images.filter(photo => photo.approved))
        if (newImageArray.length < 1) {
            throw new SubmissionError({ _error: 'Album is empty'})
        }
        try {
            await this.props.dispatch(saveAlbum(values.albumName, this.props.currentUser.username, this.props.authToken, newImageArray))
            this.props.history.push('/albums')
        } catch (error) {
            throw new SubmissionError({ _error: 'Album Name Already in Use'})
        } 
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="album-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label className="form-label" htmlFor="albumName">Save approved images album with name:</label>
                <Field
                    classNamer="form-field"
                    placeholder="album title"
                    component={Input}
                    type="text"
                    name="albumName"
                    id="albumName"
                    validate={[required, nonEmpty]}
                />
                <button className="form-button" disabled={this.props.pristine || this.props.submitting}>
                   Save new album
                </button>
            </form>
        );
    }
}

export default withRouter(reduxForm({
    form: 'albumName',
    onSubmitFail: (errors, dispatch) => dispatch(focus('albumName'))
})(AlbumNameForm))



 // END




// <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
// <label for="album-name">Album Name</label>
// <Field name="album-name" id="album-name name" type="text" component="input" />
// <button type="submit" className="button-save-album">Save as Album </button>
// </form>