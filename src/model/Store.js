import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

import {combineReducers} from "redux";
import UI from './UI'
import User from './User'
import AuthAPI from './AuthAPI'

const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(combineReducers({
    ui: UI,
    user: User,
    auth: AuthAPI
}), middleware);


export default store;