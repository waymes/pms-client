import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { doLogout } from '../../../../store/actions/auth';
import { getToken } from '../../../../store/selectors/auth';
import './style.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.permissions = {
      all: 'ALL',
      withAuth: 'WITH_AUTH',
      withoutAuth: 'WITHOUT_AUTH'
    };
    this.links = [
      { label: 'Home', to: '/', auth: this.permissions.all },
      { label: 'Profile', to: '/profile', auth: this.permissions.withAuth },
      { label: 'Login', to: '/login', auth: this.permissions.withoutAuth },
      { label: 'Signup', to: '/signup', auth: this.permissions.withoutAuth }
    ];
  }

  handleLogoutKeyPress = (e) => {
    const { logout } = this.props;
    if (e.key === 'Enter') {
      logout();
    }
  };

  renderLinks() {
    const { withToken, logout } = this.props;

    const linksList = this.links.filter(el => (withToken
      ? el.auth !== this.permissions.withoutAuth
      : el.auth !== this.permissions.withAuth
    ));

    return (
      <ul className="headerLinks">
        {linksList.map(link => (
          <li key={link.to} className="headerLinks__item">
            <NavLink exact to={link.to} activeClassName="active">{link.label}</NavLink>
          </li>
        ))}
        {withToken && (
          <li className="headerLinks__item">
            <span
              role="button"
              tabIndex="0"
              onClick={logout}
              onKeyPress={this.handleLogoutKeyPress}
            >
              Logout
            </span>
          </li>
        )}
      </ul>
    );
  }

  render() {
    return (
      <header className="header">
        <div className="container">
          <h5 className="header__logo">People Management System</h5>
          <nav className="header__nav">{this.renderLinks()}</nav>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  withToken: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  withToken: !!getToken(state)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(doLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
