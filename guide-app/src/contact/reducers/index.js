import {combineReducers} from 'redux'
import GetUsersReducer from './reducer_getuser'
import ErrorReducer from './reducer_error'

export default combineReducers({ users: GetUsersReducer, error: ErrorReducer})
