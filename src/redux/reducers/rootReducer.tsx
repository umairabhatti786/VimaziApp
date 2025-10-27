import {combineReducers} from 'redux';
import authReducer from './authReducer';
import transactionsReducer from './transactionsReducer';



const rootReducer=combineReducers({

    auth:authReducer,
    transaction:transactionsReducer,



})

export default rootReducer