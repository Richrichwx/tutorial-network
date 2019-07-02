import { createStore } from 'redux';
import { combineReducers } from 'redux';
import profileReducer from '../redux/profileReducer';
import dialogsReducer from '../redux/dialogsReducer';


let reducers = combineReducers({
  profileReducer,
  dialogsReducer
});


let store = createStore(reducers);

export default store;