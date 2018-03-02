import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'

import {combineReducers} from "redux";
import UI from './UI'

const middleware = applyMiddleware(promise(), thunk, logger);
const store = createStore(combineReducers({
    ui: UI
}), middleware);


export default store;