import { combineReducers } from 'redux'
import album from './albums'
import image from './images'

const rootReducer = combineReducers({
  album
})

export default rootReducer
