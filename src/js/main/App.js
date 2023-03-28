import React from 'react'
import Routes from './Routes'
import { Route } from 'react-router-dom'
import '../../scss/application.scss'
import history from 'browser-history'
import store from 'store'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'

// Log runtime errors with sentry service
import 'sentry'

// Top-level wrapper initializes redux and react-router.
function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route component={Routes} />
      </ConnectedRouter>
    </Provider>
  )
}

export default App
