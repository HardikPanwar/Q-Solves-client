import {combineReducers} from 'redux';
import authReducer from './auth';
import currentUserReducer from './currentUser'
import questionsReducer from './questions'
import usersReducer from './users'
import kitReducer from './kit';

export default combineReducers({
    authReducer,currentUserReducer,questionsReducer,usersReducer,kitReducer
})