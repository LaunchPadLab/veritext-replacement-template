import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { reducer as formReducer } from 'redux-form'
import { middleware as apiMiddleware } from 'api'
import { reducer as apiReducer } from 'lp-redux-api'
import {
  reducer as flashReducer,
  middleware as flashMiddleware,
} from 'redux-flash'
import {
  reducer as sessionsReducer,
  enhancer as sessionsEnhancer,
} from 'redux-sessions'
import { reducer as rootReducer, reducerKey as rootKey } from './reducer'
import history from 'browser-history'
import { isProduction } from 'config'

function initializeStore(initialState = {}) {
  // Combine the reducers into one that Redux can handle.
  // The keys below are important, as data in the store will be namespaced by them
  // and each reducer only receives the slice of state according to the key.
  const reducer = combineReducers({
    api: apiReducer,
    flash: flashReducer,
    form: formReducer,
    [rootKey]: rootReducer,
    router: connectRouter(history),
    sessions: sessionsReducer,
  })
  // Add support for the Redux Dev Tools in chrome.
  const devToolCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const composeEnhancers = isProduction() ? compose : devToolCompose
  // Combine the middlewares into one that Redux can handle
  const enhancers = composeEnhancers(
    applyMiddleware(
      apiMiddleware,
      flashMiddleware(),
      routerMiddleware(history),
      thunkMiddleware
    ),
    sessionsEnhancer()
  )
  return createStore(reducer, initialState, enhancers)
}

const store = initializeStore()

// Add store as global window variable for console debugging
window.store = store

export default store
