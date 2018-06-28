import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import App from '../components/app';
import Photos from '../components/photos';
import store from '../store';

import { onPhotosEnter } from './route_callbacks';

export default (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="photos" component={Photos} onEnter={onPhotosEnter} />
      </Route>
    </Router>
  </Provider>
);
