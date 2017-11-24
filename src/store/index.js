import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createHistory from 'history/createHashHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
const history = createHistory() ;
const middleware = routerMiddleware(history);



let store=createStore(reducer,applyMiddleware(thunk,promise,middleware,logger));
export default  store