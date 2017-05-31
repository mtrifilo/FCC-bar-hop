import axios from 'axios'
import { domain } from '../../../config.json'

const DEFAULT_STATE = {
  data: null,
  yelpToken: null
}

/**
 * Action Types
 */

const GET_BAR_DATA = 'GET_BAR_DATA'
const SET_YELP_TOKEN = 'SET_YELP_TOKEN'

/**
 * Action Creators & Reducers
 */

export function getYelpToken () {
  return dispatch => {
    axios
      .get(`${domain}/api/yelp/token`)
      .then(res => {
        if (res.data) {
          console.log('yelp token data:', res.data)
          setYelpToken(res.data)
        }
      })
      .catch(err => {
        console.error('getYelpToken error:', err)
      })
  }
}

function setYelpToken (token) {
  return { type: SET_YELP_TOKEN, token }
}
function setYelpTokenReducer (state, action) {
  return Object.assign({}, state, { yelpToken: action.token })
}

export function getBars (location) {
  return dispatch => {}
}

/**
 * Root Reducer Slice
 */

export default function bars (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_YELP_TOKEN:
      return setYelpTokenReducer(state, action)
    default:
      return state
  }
}
