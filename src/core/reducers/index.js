import { combineReducers } from 'redux';
import messages from '../../store/messages';
import profile from '../../store/profile'

export default combineReducers({
  profile,
  messages
})