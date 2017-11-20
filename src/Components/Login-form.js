import React from 'react';
import { 
    withRouter
  } from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';
import {compose} from 'redux';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
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
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <button disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm)

/*export default compose(
    withRouter(),
    reduxForm({
        form: 'login',
        onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
    })(LoginForm)
);*/


//Install react-router-redux
//https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux


//New idea
//<Header history={this.props.history} match={this.props.match}



//One Example
    /*example `const myForm = withRouter(MyComponent)`

    after
    ```export default reduxForm()(myForm)```*/



 // END

