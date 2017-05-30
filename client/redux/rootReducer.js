import { combineReducers } from 'redux'
import user from './modules/user'
import loginLocal from './modules/loginLocal'
import signupLocal from './modules/signupLocal'
import flashMessage from './modules/flashMessage'
import location from './modules/location'
import bars from './modules/bars'

export default combineReducers({
  user,
  loginLocal,
  signupLocal,
  flashMessage,
  location,
  bars
})
