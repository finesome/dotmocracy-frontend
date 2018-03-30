import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

<<<<<<< HEAD
import { combineReducers } from "redux";
import AuthAPI from './AuthAPI';
import Boards from './Boards';
import DashboardAPI from './DashboardAPI';
import Toast from './Toast';
=======
import {combineReducers} from "redux";
import User from './User';
import AuthAPI from './AuthAPI';
>>>>>>> dev-makar
import UI from './LoginUI';
import User from './User'


const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(combineReducers({
<<<<<<< HEAD
    auth: AuthAPI,
    boards: Boards,
    dashboard: DashboardAPI,
    toast: Toast,
    ui: UI,
    user: User
=======
    ui: UI,
    user: User,
    auth: AuthAPI
>>>>>>> dev-makar
}), middleware);


export default store;