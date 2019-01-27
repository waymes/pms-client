import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { updateCurrentUserAction } from '../../../../store/actions/user';
import { getUserInfo, getUserIsLoading, getUserError } from '../../../../store/selectors/user';
import { withNotifications } from '../../../common/notification';
import ContentLayout from '../components/content-layout';
import Loader from '../../../common/loader';
import TextField from '../../../common/text-field';
import Button from '../../../common/button';

class ProfileEdit extends Component {
  componentDidUpdate(prevProps) {
    const { errorMessage, queueNotification } = this.props;

    const newError = errorMessage && !prevProps.errorMessage;
    if (newError && errorMessage instanceof Array) {
      errorMessage.forEach(err => queueNotification(err, { variant: 'error' }));
    } else if (newError) {
      queueNotification(errorMessage, { variant: 'error' });
    }
  }

  submit = (user) => {
    const { updateCurrentUser } = this.props;

    updateCurrentUser(user);
  }

  render() {
    const { handleSubmit, isLoading } = this.props;

    return (
      <ContentLayout title="Edit Profile">
        <form onSubmit={handleSubmit(this.submit)}>
          <TextField name="firstName" placeholder="First Name" required />
          <TextField name="lastName" placeholder="Last Name" required />
          <TextField name="email" placeholder="Email" type="email" required />
          <TextField name="city" placeholder="City" />
          <div className="d-flex justify-content-end">
            <Button type="submit">Save</Button>
          </div>
        </form>
        <Loader isLoading={isLoading} withBlur />
      </ContentLayout>
    );
  }
}

ProfileEdit.propTypes = {
  updateCurrentUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
};

const mapStateToProps = state => ({
  initialValues: getUserInfo(state),
  isLoading: getUserIsLoading(state),
  errorMessage: getUserError(state)
});

const mapDispatchToProps = dispatch => ({
  updateCurrentUser: (user) => dispatch(updateCurrentUserAction(user))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'ProfileEditForm',
    enableReinitialize: true,
  }),
  withNotifications
)(ProfileEdit);
