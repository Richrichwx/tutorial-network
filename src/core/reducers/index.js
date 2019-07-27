import { combineReducers } from 'redux';
import messages from '../../store/messages';
import post from '../../store/post';
import nameDialogs from '../../store/nameDialogs';
import users from '../../store/users'

export default combineReducers({
  post,
  messages,
  nameDialogs,
  users
})