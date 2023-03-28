import { handleActions } from 'redux-actions'
// import { selectorForSlice } from 'lp-redux-utils'

const reducerKey = 'styleguide'
// const slice = 'root.styleguide'

const initialState = {}

const reducer = handleActions({}, initialState)

// const select = selectorForSlice(slice)

const selectors = {}

export { reducer, selectors, reducerKey }
