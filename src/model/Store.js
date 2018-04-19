import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import { combineReducers } from "redux";
import AuthAPI from './AuthAPI';
import BoardAPI from './BoardAPI';
import Boards from './Boards';
import DashboardAPI from './DashboardAPI';
import Ideas from './Ideas';
import LoginUI from './LoginUI';
import User from './User';


const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(combineReducers({
    auth: AuthAPI,
    board: BoardAPI,
    boards: Boards,
    dashboard: DashboardAPI,
    ideas: Ideas,
    ui: LoginUI,
    user: User
}), middleware);


export default store;