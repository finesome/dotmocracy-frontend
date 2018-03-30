import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import { combineReducers } from "redux";
import AuthAPI from './AuthAPI';
import Boards from './Boards';
import DashboardAPI from './DashboardAPI';
import Toast from './Toast';
import UI from './LoginUI';
import User from './User'


const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(combineReducers({
    auth: AuthAPI,
    boards: Boards,
    dashboard: DashboardAPI,
    toast: Toast,
    ui: UI,
    user: User
}), middleware);


export default store;