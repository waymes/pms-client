import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getToken } from '../../store/selectors/auth';

const authCheck = ({ withAuth }) => Component => compose(
  connect(state => ({ isLoggedIn: !!getToken(state) }))
)(
  class extends React.PureComponent {
    static propTypes = {
      isLoggedIn: PropTypes.bool.isRequired
    }

    render() {
      const { isLoggedIn } = this.props;

      if (withAuth && !isLoggedIn) {
        return <Redirect to="/login" />
      } else if (!withAuth && isLoggedIn) {
        return <Redirect to="/profile" />
      }
      return <Component {...this.props} />;
    }
  }
);

export default authCheck;
