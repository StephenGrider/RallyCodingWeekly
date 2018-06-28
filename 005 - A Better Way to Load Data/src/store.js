import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

export default createStoreWithMiddleware(reducers)
