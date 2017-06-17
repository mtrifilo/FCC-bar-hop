import axios from 'axios'
import { domain } from '../../../config.json'

const DEFAULT_STATE = {
  barData: null,
  yelpToken: null
}

/**
 * Action Types
 */

const SET_BAR_DATA = 'SET_BAR_DATA'
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
          dispatch(setYelpToken(res.data))
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
  return dispatch => {
    axios.get(`${domain}/api/yelp/bars/${location}`).then(barData => {
      console.log('redux: barData:', barData)
      if (barData.data && barData.data.success) {
        dispatch(setBarData(barData.data.barData))
      } else {
        console.error("redux: coudn't get bars", barData)
        dispatch(setBarData({ error: barData }))
      }
    })
  }
}

function setBarData (barData) {
  return { type: SET_BAR_DATA, barData }
}
function setBarDataReducer (state, action) {
  return Object.assign({}, state, { barData: action.barData })
}

/**
 * Root Reducer Slice
 */

export default function bars (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_YELP_TOKEN:
      return setYelpTokenReducer(state, action)
    case SET_BAR_DATA:
      return setBarDataReducer(state, action)
    default:
      return state
  }
}
