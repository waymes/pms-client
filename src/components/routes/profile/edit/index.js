import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { updateCurrentUserAction } from '../../../../store/actions/user';
import { getUserInfo } from '../../../../store/selectors/user';
import ContentLayout from '../components/content-layout';
import TextField from '../../../common/text-field';
import Button from '../../../common/button';

class ProfileEdit extends Component {
  submit = (user) => {
    const { updateCurrentUser } = this.props;

    updateCurrentUser(user);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <ContentLayout title="Edit Profile">
        <form onSubmit={handleSubmit(this.submit)}>
          <TextField name="firstName" required />
          <TextField name="lastName" required />
          <TextField name="email" type="email" required />
          <Button type="submit">Save</Button>
        </form>
      </ContentLayout>
    );
  }
}

ProfileEdit.propTypes = {
  updateCurrentUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  initialValues: getUserInfo(state)
});

const mapDispatchToProps = dispatch => ({
  updateCurrentUser: (user) => dispatch(updateCurrentUserAction(user))
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'ProfileEditForm',
    enableReinitialize: true,
  })
)(ProfileEdit);
