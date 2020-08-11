import { combineReducers } from 'redux';
import GeneralReducer from './GeneralReducer';
import UserReducer from './UserReducer';



export default combineReducers({
  general: GeneralReducer,
  user: UserReducer
});
