import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import authCheck from '../../layouts/auth-wrapper';
import { getUserInfo, getUserIsLoading } from '../../../store/selectors/user';
import { fetchCurrentUserAction } from '../../../store/actions/user';
import Loader from '../../common/loader';
import Edit from './edit';
import PeopleList from './people-list';
import PeopleEdit from './people-edit';
import Settings from './settings';

import DefaultAva from '../../../assets/default.png';
import './style.scss';

class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.tabs = [
      { label: 'Profile', to: '/profile', exact: true },
      { label: 'People', to: '/profile/people', exact: false },
      { label: 'Settings', to: '/profile/settings', exact: true },
    ];
  }

  componentDidMount() {
    const { fetchCurrentUser } = this.props;

    fetchCurrentUser();
  }

  renderTabs() {
    return (
      <ul className="profilePageTabs">
        {this.tabs.map(tab => (
          <li className="profilePageTabs__item" key={tab.to}>
            <NavLink
              exact={tab.exact}
              className="profilePageTabs__link"
              activeClassName="profilePageTabs__link_active"
              to={tab.to}
            >{tab.label}</NavLink>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { user, match } = this.props;

    if (!user) return <Loader isLoading={true} />;

    return (
      <div className="profilePage">
        <div className="profilePage__header px-5 container">
          <div className="profilePage__avatar" style={{ backgroundImage: `url(${user.avatar || DefaultAva})` }} />
          <div className="profilePageInfo">
            <h4 className="profilePageInfo__name">{user.firstName} {user.lastName}</h4>
            <span className="profilePageInfo__email">{user.email}</span>
          </div>
        </div>
        <nav className="profilePage__tabs">
          {this.renderTabs()}
        </nav>
        <div className="profilePage__tabsContent">
          <div className="container">
            <Route exact path={`${match.url}/`} component={Edit} />
            <Route exact path={`${match.url}/people`} component={PeopleList} />
            <Route exact path={`${match.url}/people/:personId`} component={PeopleEdit} />
            <Route exact path={`${match.url}/settings`} component={Settings} />
          </div>
        </div>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  user: PropTypes.object,
  isLoading: PropTypes.bool
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
