import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createReducer from './reducers';

export default function configureStore(initialState = {}) {

  // middlewares
  const middlewares = [
    thunk,
  ];

  // create store
  const store = createStore(
      createReducer(),
      initialState,
      applyMiddleware(...middlewares),
  );

  // Async reducer registry
  store.asyncReducers = {};

  // Make reducers hot reloadable
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const createReducer = require('./reducers');
      const nextReducers = createReducer(store.asyncReducers);
      store.replaceReducer(nextReducers);
    });
  }

  return store;
};
