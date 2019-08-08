import { combineReducers } from 'redux';
import messages from '../../store/messages';
import post from '../../store/post';
import nameDialogs from '../../store/nameDialogs';
import users from '../../store/users';
import profile from '../../store/profile';
import auth from '../../store/auth';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  post,
  messages,
  nameDialogs,
  users,
  profile,
  auth,
  form: formReducer
})