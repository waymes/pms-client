import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { doSigninAction } from '../../../../store/actions/auth';
import { getLoading, getError } from '../../../../store/selectors/auth';
import authCheck from '../../../layouts/auth-wrapper';
import { withNotifications } from '../../../common/notification';
import WindowForm from '../components/window-form';
import TextField from '../../../common/text-field';
import Button from '../../../common/button';

class LoginPage extends Component {
  componentDidUpdate(prevProps) {
    const { errorMessage, queueNotification } = this.props;

    if (!prevProps.errorMessage && errorMessage) {
      queueNotification(errorMessage, { variant: 'error' });
    }
  }

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
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};

const mapStateToProps = state => ({
  isLoading: getLoading(state),
  errorMessage: getError(state)
});

const mapDispatchToProps = dispatch => ({
  signin: values => dispatch(doSigninAction(values))
});

export default compose(
  authCheck({ withAuth: false }),
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'LoginPageForm' }),
  withNotifications
)(LoginPage);
