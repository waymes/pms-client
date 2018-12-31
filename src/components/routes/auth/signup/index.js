import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import authCheck from '../../../layouts/auth-wrapper';
import { doSignupAction } from '../../../../store/actions/auth';
import WindowForm from '../components/window-form';
import TextField from '../../../common/text-field';
import Button from '../../../common/button';
import { getLoading } from '../../../../store/selectors/auth';

class SignupPage extends Component {
  submit = (values) => {
    const { signup } = this.props;

    signup(values);
  }

  render() {
    const { handleSubmit, isLoading } = this.props;

    return (
      <WindowForm title="Sign up" onSubmit={handleSubmit(this.submit)} isLoading={isLoading}>
        <TextField name="firstName" placeholder="First Name" required />
        <TextField name="lastName" placeholder="Last Name" required />
        <TextField name="email" placeholder="Email" type="email" required />
        <TextField name="password" placeholder="Password" type="password" required />
        <Button type="submit">Signup</Button>
      </WindowForm>
    );
  }
}

SignupPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoading: getLoading(state)
});

const mapDispatchToProps = dispatch => ({
  signup: values => dispatch(doSignupAction(values)),
});

export default compose(
  authCheck({ withAuth: false }),
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'SignupPageForm' }),
)(SignupPage);
