import { combineReducers } from 'redux';
import profileReducer from '../../redux/profileReducer';
import dialogsReducer from '../../redux/dialogsReducer';
export default combineReducers({
  profileReducer,
  dialogsReducer
})