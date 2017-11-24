import {combineReducers} from 'redux';
import home from './home'
import user from './user'
import list from './list'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
export default combineReducers({
    home,
    user,
    routerReducer,
    list
})