import React from 'react';

import { Consumer } from './context';

const notificationConsumer = Component => ({ children, ...props }) => (
  <Consumer>
    {notificationProps => <Component {...props} {...notificationProps} />}
  </Consumer>
);

export default notificationConsumer;
