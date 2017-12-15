import React from 'react';
import { withRouter } from 'react-router';
import {Field, focus, reduxForm, SubmissionError} from 'redux-form';
import Input from './input';
import {required, nonEmpty} from '../validators';
import {inviteGuest} from '../actions/index';
import './Form.css';

export class InviteGuestForm extends React.Component {
    async onSubmit(values) {
        try {
            await this.props.dispatch(inviteGuest(values.inviteGuest, this.props.albumName.albumId, this.props.currentUser.username, this.props.authToken))
            // this.props.history.push('/albums')
        } catch (error) {
            throw new SubmissionError({ _error: 'Album add guest failed'})
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
                className="album-guest"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label className="form-label" htmlFor="inviteGuest">Guest Reviewer Email</label>
                <Field
                    classNamer="form-field"
                    component={Input}
                    type="text"
                    name="inviteGuest"
                    id="inviteGuest"
                    validate={[required, nonEmpty]}
                />
                <button className="form-button" disabled={this.props.pristine || this.props.submitting}>
                   Invite Guest by Email
                </button>
            </form>
        );
    }
}

export default withRouter(reduxForm({
    form: 'inviteGuest',
    onSubmitFail: (errors, dispatch) => dispatch(focus('inviteGuest'))
})(InviteGuestForm))