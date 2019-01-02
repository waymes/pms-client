import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App';
import { NotificationProvider } from './components/common/notification';
import { store, history, persistor } from './store';
import * as serviceWorker from './serviceWorker';
import './style/main.scss';

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister(); // TODO: register
