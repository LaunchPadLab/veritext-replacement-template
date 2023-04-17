import { handleActions } from 'redux-actions'
import { selectorForSlice } from 'lp-redux-utils'
import { setOnSuccess } from 'lp-redux-api'
// import * as actions from './actions'
import * as apiActions from 'api-actions'

const reducerKey = 'files'
const slice = 'root.files'
const initialState = {}
const reducer = handleActions(
  {
    [apiActions.fetchFiles]: setOnSuccess('files'),
    // [apiActions.fetchFile]: setOnSuccess('file'),
    // [actions.clearFile]: unsetState('file'),
  },
  initialState
)
const select = selectorForSlice(slice)
const selectors = {
  files: select('files'),
  // file: select('file'),
}

export { reducer, selectors, reducerKey }
