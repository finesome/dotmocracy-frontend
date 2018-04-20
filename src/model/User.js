import axios from 'axios'
import { hideLoginRegisterForm } from '.'

/* Action types */
const SET_USER = "dotmocracy/User/SET_USER";
export const DROP_USER = "dotmocracy/User/DROP_USER";

/* Reducer */
const initial_state = {
    user: null,
};

export default function reducer( state = initial_state, action = {} ) {
    switch ( action.type ) {
        case SET_USER:
            return { ...state, user: action.payload };
        case DROP_USER:
            return { ...state, user: null };
        default:
            return state;
    }
}


/* Action creators */
export const setUser = (value) => dispatch => {
    console.log('--- Set user ---');
    console.log(value);
    // save to localstorage
    localStorage.setItem("authorization", value.headers['authorization']);
    axios.defaults.headers.common['Authorization'] = value.headers['authorization'];
    dispatch({
        type: SET_USER,
        payload: value.data
    });
    dispatch( hideLoginRegisterForm() );
    localStorage.setItem("username", value.data);
}

export const dropUser = () => dispatch => {
    // remove from localstorage
    localStorage.removeItem("authorization");
    axios.defaults.headers.common['Authorization'] = '';
    dispatch({
        type: DROP_USER
    });
    localStorage.removeItem("user");
}

export const checkAuth = () => dispatch => {
    const username = localStorage.getItem("username");
    const authorization = localStorage.getItem("authorization");

    if (!username) {
        console.log("No user in local storage");
        dispatch(dropUser());
    } else {
        console.log("There is a user in local storage, restoring session");
        dispatch(setUser({ data: username, headers: { authorization } }));
    }
}