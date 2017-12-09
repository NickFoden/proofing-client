import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import photoReducer from './photoReducer';
import userReducer from './auth';
import authReducer from './auth';
import protectedDataReducer from './protected-data';
import photoAlbumReducer from './photoAlbumReducer';

const rootReducer = combineReducers({
  photoReducer,
  userReducer,
  form :formReducer,
  auth: authReducer,
  photoAlbumReducer,
  protectedData: protectedDataReducer
})

export default rootReducer
