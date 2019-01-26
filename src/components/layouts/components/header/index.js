import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import withSizes from '../../../../helpers/sizes';
import { logoutAction } from '../../../../store/actions/auth';
import { getToken } from '../../../../store/selectors/auth';
import './style.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBurgerMenu: false
    };

    this.permissions = { all: 'ALL', withAuth: 'WITH_AUTH', withoutAuth: 'WITHOUT_AUTH' };
    this.links = [
      { label: 'Home', to: '/', auth: this.permissions.all, exact: true },
      { label: 'Profile', to: '/profile', auth: this.permissions.withAuth, exact: false },
      { label: 'Login', to: '/login', auth: this.permissions.withoutAuth, exact: true },
      { label: 'Signup', to: '/signup', auth: this.permissions.withoutAuth, exact: true }
    ];
  }

  componentDidUpdate(prevProps) {
    const { showBurgerMenu } = this.state;
    const { isDesktop, location } = this.props;

    const locationChanged = location !== prevProps.location;
    const resizedToDesktop = isDesktop && !prevProps.isDesktop;
    if ((locationChanged || resizedToDesktop) && showBurgerMenu) {
      this.setState({ showBurgerMenu: false });
    }
  }

  toggleBurgerMenu = () => {
    const { showBurgerMenu } = this.state;

    this.setState({ showBurgerMenu: !showBurgerMenu });
  }

  handleLogoutKeyPress = (e) => {
    const { logout } = this.props;
    if (e.key === 'Enter') {
      logout();
    }
  };

  handleLogout = () => {
    const { showBurgerMenu } = this.state;
    const { logout } = this.props;

    if (showBurgerMenu) {
      this.setState({ showBurgerMenu: false });
    }
    logout();
  }

  renderLinks() {
    const { showBurgerMenu } = this.state;
    const { withToken, isDesktop } = this.props;

    const linksList = this.links.filter(el => (withToken
      ? el.auth !== this.permissions.withoutAuth
      : el.auth !== this.permissions.withAuth
    ));

    const mobileClassName = isDesktop ? '' : 'headerLinks_mobile';
    const mobileActiveClassName = showBurgerMenu ? 'headerLinks_mobileActive' : '';
    return (
      <ul className={`headerLinks ${mobileClassName} ${mobileActiveClassName}`}>
        {linksList.map(link => (
          <li key={link.to} className="headerLinks__item">
            <NavLink exact={link.exact} to={link.to} activeClassName="active">{link.label}</NavLink>
          </li>
        ))}
        {withToken && (
          <li className="headerLinks__item">
            <span
              role="button"
              tabIndex="0"
              onClick={this.handleLogout}
              onKeyPress={this.handleLogoutKeyPress}
            >Logout</span>
          </li>
        )}
      </ul>
    );
  }

  renderBurger() {
    const { showBurgerMenu } = this.state;

    return (
      <div
        className={`header__burger ${showBurgerMenu ? 'header__burger_active' : ''}`}
        onClick={this.toggleBurgerMenu}
      >
        {new Array(3).fill(null).map((_, id) => <span key={id} />)}
      </div>
    );
  }

  render() {
    const { isDesktop } = this.props;

    return (
      <header className="header">
        <div className="container">
          <h5 className="header__logo">People Management System</h5>
          <nav className="header__nav">
            {this.renderLinks()}
            {!isDesktop && this.renderBurger()}
          </nav>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  withToken: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  isDesktop: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  withToken: !!getToken(state)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction())
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withSizes({ withDesktop: true }),
  withRouter
)(Header);
