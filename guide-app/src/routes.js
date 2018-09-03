import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './App'

export default (
  <Router>
    <Route path='/' component={App}>
      <Route path='/app' component={App} />
    </Route>
  </Router>
)
