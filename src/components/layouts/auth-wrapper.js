import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getToken } from '../../store/selectors/auth';

const authCheck = ({ withAuth }) => Component => compose(
  connect(state => ({ isLoggedIn: !!getToken(state) })),
  withRouter
)(
  class extends React.PureComponent {
    static propTypes = {
      isLoggedIn: PropTypes.bool.isRequired,
      history: PropTypes.shape({
        push: PropTypes.func.isRequired
      }).isRequired
    }

    componentDidUpdate() {
      const { isLoggedIn, history } = this.props;

      if (withAuth && !isLoggedIn) {
        history.push('/login');
      } else if (!withAuth && isLoggedIn) {
        history.push('/profile');
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }
);

export default authCheck;
