import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local-storage';
import { setAuthToken } from './actions/auth';

import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f),
);

window.store = store;

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
}

export default store;
