import React from 'react';
import { withRouter } from 'react-router';
import { Field, focus, reduxForm, SubmissionError } from 'redux-form';
import Input from './input';
import { required, nonEmpty } from '../validators';
import { inviteGuest } from '../actions/index';
import './Form.css';

export class InviteGuestForm extends React.Component {
  async onSubmit(values) {
    try {
      await this.props.dispatch(inviteGuest(
        this.props.currentUser.username,
        this.props.albumName._id,
        this.props.authToken,
        values.inviteGuest,
      ));
      // this.props.history.push('/albums')
    } catch (error) {
      throw new SubmissionError({ _error: 'Album add guest failed' });
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
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        {error}
        <label className="form-label" htmlFor="inviteGuest">
          Add a Guest to this album by their Email:
        </label>
        <Field
          className="form-field"
          component={Input}
          placeholder="guests email"
          type="text"
          name="inviteGuest"
          id="inviteGuest"
          validate={[required, nonEmpty]}
        />
        <button className="form-button" disabled={this.props.pristine || this.props.submitting}>
          Add this guest
        </button>
      </form>
    );
  }
}

export default withRouter(reduxForm({
  form: 'inviteGuest',
  onSubmitFail: (errors, dispatch) => dispatch(focus('inviteGuest')),
})(InviteGuestForm));
