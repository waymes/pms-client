import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { doSigninAction } from '../../../../store/actions/auth';
import { getLoading } from '../../../../store/selectors/auth';
import authCheck from '../../../layouts/auth-wrapper';
import WindowForm from '../components/window-form';
import TextField from '../../../common/text-field';
import Button from '../../../common/button';

class LoginPage extends Component {
  submit = (values) => {
    const { signin } = this.props;

    signin(values);
  };

  render() {
    const { handleSubmit, isLoading } = this.props;

    return (
      <WindowForm title="Log in" onSubmit={handleSubmit(this.submit)} isLoading={isLoading}>
        <TextField name="email" placeholder="Email" type="email" required />
        <TextField name="password" placeholder="Password" type="password" required />
        <Button type="submit">Login</Button>
      </WindowForm>
    );
  }
}

LoginPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  signin: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoading: getLoading(state)
})

const mapDispatchToProps = dispatch => ({
  signin: values => dispatch(doSigninAction(values))
});

export default compose(
  authCheck({ withAuth: false }),
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'LoginPageForm' }),
)(LoginPage);
