import { combineReducers } from 'redux';
import messages from '../../store/messages';
import profile from '../../store/profile';
import nameDialogs from '../../store/nameDialogs';
import users from '../../store/users'

export default combineReducers({
  profile,
  messages,
  nameDialogs,
  users
})