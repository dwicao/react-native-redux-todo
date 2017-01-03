import { applyMiddleware, createStore } from 'redux';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware()
  );
}
