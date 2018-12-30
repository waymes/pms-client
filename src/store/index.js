import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import createRootReducer from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const rootReducer = createRootReducer(history);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = composeWithDevTools({
  name: 'PMS'
});

const middleware = [routerMiddleware(history), sagaMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
