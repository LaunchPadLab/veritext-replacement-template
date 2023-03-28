import { combineReducers } from 'redux'
import { resetState } from './actions'
import { reducer as homeReducer, reducerKey as homeReducerKey } from './home'
import {
  reducer as styleguideReducer,
  reducerKey as styleguideReducerKey,
} from './styleguide'

const reducerKey = 'root'
const rootReducer = combineReducers({
  [homeReducerKey]: homeReducer,
  [styleguideReducerKey]: styleguideReducer,
})

function reducer(state, action) {
  if (action.type === resetState.toString()) {
    return rootReducer(undefined, action)
  }
  return rootReducer(state, action)
}

export { reducer, reducerKey }
