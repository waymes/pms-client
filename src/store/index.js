import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import createRootReducer from './reducers';
import rootSaga from './sagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const rootReducer = createRootReducer(history);

const composeEnhancers = composeWithDevTools({
  name: 'CALLIN'
});

const middleware = [routerMiddleware(history), sagaMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);
