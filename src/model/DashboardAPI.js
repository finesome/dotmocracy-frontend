import axios from 'axios'

const done = action => action+"_FULFILLED";
const fail = action => action+"_REJECTED";
const load = action => action+"_PENDING";

/* Action types */
const FETCH_BOARDS = "dotmocracy/Dashboard/FETCH_BOARDS";

/* Reducer */
const initial_state = {
    fetch_boards: {load: null, fail: null, done: null},
    
};
export default function reducer(state = initial_state, action = {}) {
    switch (action.type) {
      case done(FETCH_BOARDS): return {...state, fetch_boards: {done: true}};
      case fail(FETCH_BOARDS): return {...state, fetch_boards: {fail: true}};
      case load(FETCH_BOARDS): return {...state, fetch_boards: {load: true}};
      default: return state;
    }
}

/* Action creators */
export const fetchBoards = user => dispatch => {
    return dispatch => { 
        dispatch({
            type: FETCH_USER,
            payload: axios.get(`/api/boards`)
        }).then(
            response => { dispatch(setBoards(response.data)) }, 
            error => { console.log("Error fetching boards:", error) } // TODO: dispatch showErrorMessage(response.statusText) or smth
        )     
    }
}