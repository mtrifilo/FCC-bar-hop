const DEFAULT_STATE = {
  searchInputValue: '',
  currentLocation: ''
}

// ******* Action Types *******

const UPDATE_SEARCH_INPUT_VALUE = 'UPDATE_SEARCH_INPUT_VALUE'

// ******* Action Creators & Reducers *******

export function onInputChange (event) {
  return { type: UPDATE_SEARCH_INPUT_VALUE, value: event.target.value }
}
const onInputChangeReducer = (state, action) => {
  return Object.assign({}, state, { searchInputValue: action.value })
}

// ******* Root Reducer Slice *******

export default function location (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case UPDATE_SEARCH_INPUT_VALUE:
      return onInputChangeReducer(state, action)
    default:
      return state
  }
}
