import React from 'react';
import { Field, focus, reduxForm, SubmissionError } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import './Form.css';

export class LoginForm extends React.Component {
  async onSubmit(values) {
    try {
      await this.props.dispatch(login(values.username, values.password));

      this.props.history.push('/photos');
    } catch (error) {
      throw new SubmissionError({ _error: 'Incorrect username or password' });
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
        className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <br />
        {error}
        <label className="form-label" htmlFor="username">
          Email
        </label>
        <Field
          classNamer="form-field"
          component={Input}
          type="text"
          name="username"
          id="username"
          validate={[required, nonEmpty]}
        />
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <Field
          component={Input}
          type="password"
          name="password"
          id="password"
          validate={[required, nonEmpty]}
        />
        <button className="form-button" disabled={this.props.pristine || this.props.submitting}>
          Log in
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username')),
})(LoginForm);

// END
