import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
// @ts-ignore

import reducers from './reducers';

let storeInstance: any;

export default function () {
  if (storeInstance) {
    return storeInstance;
  }

  storeInstance = createStore(reducers, {}, compose(applyMiddleware(thunkMiddleware)));

  return storeInstance;
}
