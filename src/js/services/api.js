import { configureApi, http } from 'lp-requests'
import { middleware as configureMiddleware } from 'lp-redux-api'
// import { actions as sessionActions } from 'redux-sessions'

// Configure lp-redux-api middleware

// This function will be passed the request options before every request.
// You can use it to set additional options or override existing ones.
function before() {
  return {}
}

// Any transformations of successful responses can go here.
function onSuccess(res) {
  return res
}

// Any transformations of failed responses can go here.
function onFailure(res) {
  return res
}

// Global handler to trigger when API receives a response with a 401 code.
// This is invoked _in addition to_ the failureAction option.
function onUnauthorized() {
  return function (/* dispatch */) {
    // dispatch(sessionsActions.logout())
    window.location.reload()
  }
}

export const config = {
  root: process.env.REACT_APP_API_URL,
  successDataPath: 'data.attributes', // By default, we pull out the value nested at `data.attributes`
  before,
  onSuccess,
  onFailure,
  onUnauthorized,
  mode: 'cors',
}

export const middleware = configureMiddleware(http, config)
export const api = configureApi(config)
