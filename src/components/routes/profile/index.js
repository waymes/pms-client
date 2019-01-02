import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';

import authCheck from '../../layouts/auth-wrapper';
import { getUserInfo, getUserIsLoading } from '../../../store/selectors/user';
import { fetchCurrentUserAction } from '../../../store/actions/user';

class ProfilePage extends Component {
  componentDidMount() {
    const { fetchCurrentUser } = this.props;

    fetchCurrentUser();
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <h2>ProfilePage</h2>
        <p>{user && `${user.firstName} ${user.lastName}`}</p>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  user: getUserInfo(state),
  isLoading: getUserIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: () => dispatch(fetchCurrentUserAction())
});

export default compose(
  authCheck({ withAuth: true }),
  connect(mapStateToProps, mapDispatchToProps)
)(ProfilePage);
