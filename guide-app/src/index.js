import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash'
import axios from 'axios'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch }  from 'react-router-dom';
import ReduxPromise from 'redux-promise'
import thunkMiddleware from 'redux-thunk'
import reducers from './contact/reducers/index'

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './index.css';
import App from './app/containers/App'
import Form from './form/container/Form'
import Contact from './contact/containers/Contact'
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, thunkMiddleware)(createStore);

axios.defaults.headers.common['X-REQ-TYPE'] = 'GUIDE_APP'
axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  var errorData = error.data
  if (error.status === 400 && _.has(errorData, 'errorType')) {
    console.log('getting interceptor response error')
    if (_.get(errorData, 'errorType') === 'Redirect' && _.has(errorData, 'location')) {
      window.location.href = _.get(errorData, 'location')
    }
  } else {
    return Promise.reject(error)
  }
})

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/form" component={Form}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
