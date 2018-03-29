import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import {combineReducers} from "redux";
import User from './User'
import AuthAPI from './AuthAPI'
import Toast from './Toast'
import UI from './LoginUI';


const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(combineReducers({
    ui: UI,
    user: User,
    auth: AuthAPI,
    toast: Toast
}), middleware);


export default store;