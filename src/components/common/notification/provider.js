import React from 'react';
import PropTypes from 'prop-types';

import { Provider } from './context';
import './style.scss';

class NotificationProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [/*{ text: 'Error: 404 item not found', meta: { variant: 'error' } }*/]
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { notifications } = this.state;

    if (prevState.notifications.length === 0 && notifications.length > 0) {
      setTimeout(this.closeNotification, 2000);
    }
  }

  getIconByVariant(variant) {
    switch (variant) {
      case 'error':
        return 'fa-times-circle';
      case 'success':
        return 'fa-check-circle';
      default:
        return 'fa-check-circle';
    }
  }

  queueNotification = (text, meta = {}) => {
    const { notifications } = this.state;

    this.setState({ notifications: [...notifications, { text, meta }] });
  };

  closeNotification = (closeId = 0) => {
    const { notifications } = this.state;

    this.setState({ notifications: notifications.filter((el, id) => id !== closeId) });
    if (notifications.length > 1) {
      setTimeout(this.closeNotification, 1000);
    }
  };

  renderNotifications() {
    const { notifications } = this.state;
    const { maxAmount } = this.props;

    return (
      <div className="notificationList">
        {notifications.slice(0, maxAmount).map((notification, id) => (
          <div className={`notification notification_${notification.meta.variant || 'success'}`} key={id}>
            <i className={`far ${this.getIconByVariant(notification.meta.variant || 'success')}`} />
            <span className="notification__text">{notification.text}</span>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { children } = this.props;

    const notificationProps = {
      queueNotification: this.queueNotification
    };
    return (
      <Provider value={notificationProps}>
        {children}
        {this.renderNotifications()}
      </Provider>
    );
  }
}

NotificationProvider.propTypes = {
  children: PropTypes.node.isRequired,
  maxAmount: PropTypes.number
};

NotificationProvider.defaultProps = {
  maxAmount: 3
};

export default NotificationProvider;
