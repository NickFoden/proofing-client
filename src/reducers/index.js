import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import album from './albums';
import userReducer from './auth';
import authReducer from './auth';
import protectedDataReducer from './protected-data';

const rootReducer = combineReducers({
  album,
  userReducer,
  form :formReducer,
  auth: authReducer,
  protectedData: protectedDataReducer
})

export default rootReducer
