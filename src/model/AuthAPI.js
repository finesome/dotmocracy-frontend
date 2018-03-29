import axios from 'axios'
import {setUser, dropUser} from '.'

const done = action => action+"_FULFILLED";
const fail = action => action+"_REJECTED";
const load = action => action+"_PENDING";

/* Action types */
const FETCH_USER = "dotmocracy/AuthAPI/fetch_user";
const LOGIN_USER = "dotmocracy/AuthAPI/LOGIN_USER";
const REGISTER_USER = "dotmocracy/AuthAPI/REGISTER_USER";
const LOGOUT_USER = "dotmocracy/AuthAPI/LOGOUT_USER"

/* Reducer */
const initial_state = {
    fetch_user: {load: null, fail: null, done: null},
    login_user: {load: null, fail: null, done: null},
    register_user: {load: null, fail: null, done: null},
    logout_user: {load: null, fail: null, done: null},
    
};
export default function reducer(state = initial_state, action = {}) {
    switch (action.type) {
      case done(FETCH_USER): return {...state, fetch_user: {done: true}};
      case fail(FETCH_USER): return {...state, fetch_user: {fail: true}};
      case load(FETCH_USER): return {...state, fetch_user: {load: true}};

      case done(LOGIN_USER): return {...state, login_user: {done: true}};
      case fail(LOGIN_USER): return {...state, login_user: {fail: true}};
      case load(LOGIN_USER): return {...state, login_user: {load: true}};

      case done(REGISTER_USER): return {...state, register_user: {done: true}};
      case fail(REGISTER_USER): return {...state, register_user: {fail: true}};
      case load(REGISTER_USER): return {...state, register_user: {load: true}};

      case done(LOGOUT_USER): return {...state, logout_user: {done: true}};
      case fail(LOGOUT_USER): return {...state, logout_user: {fail: true}};
      case load(LOGOUT_USER): return {...state, logout_user: {load: true}};
      default: return state;
    }
  }


/* Action creators */
export const fetchUser = user => dispatch => {
    dispatch({
        type: FETCH_USER,
        payload: axios.get(`/api/user`)
    })
    .then(response=> {dispatch(setUser(response.data))}, error=> dispatch(dropUser())) // TODO: dispatch showErrorMessage(response.statusText) or smth
}

export function loginUser(login, password){
    return dispatch => {
        dispatch({
            type: LOGIN_USER,
            payload: axios.post(`/api/user/login`, {login, password})
        }).then((response) => {dispatch(setUser(response.data))},
                (error) => {console.log("Wrong credentials")}) // TODO: dispatch wrong credentials or smth
    }
}

export const registerUser = (login, password) => dispatch => {
    dispatch({
        type: REGISTER_USER,
        payload: axios.post(`/api/user/register`, {login, password})
    })
    .then(
        response => dispatch(setUser(response.data)),
        error=>{console.log("Wrong credentials")}
    )
}
    
export const logoutUser = (login, password) => dispatch => {
    dispatch({
        type: LOGOUT_USER,
        payload: axios.post(`/api/user/logout`, {})
    })
    .then(response => dispatch(setUser(response.data)), error=>{console.log("Wrong credentials")})
}