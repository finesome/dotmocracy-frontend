import axios from 'axios';
import lodash from 'lodash';
import { setBoards, setIdeas } from '.';

import boards_json from 'boards.json';

const done = action => action+"_FULFILLED";
const fail = action => action+"_REJECTED";
const load = action => action+"_PENDING";

/* Action types */
const FETCH_BOARDS = "dotmocracy/Dashboard/FETCH_BOARDS";
const FETCH_IDEAS = "dotmocracy/Dashboard/FETCH_IDEAS";

/* Reducer */
const initial_state = {
    fetch_boards: {load: null, fail: null, done: null},
    fetch_ideas: {load: null, fail: null, done: null}
};
export default function reducer(state = initial_state, action = {}) {
    switch (action.type) {
      case done(FETCH_BOARDS): return {...state, fetch_boards: {done: true}};
      case fail(FETCH_BOARDS): return {...state, fetch_boards: {fail: true}};
      case load(FETCH_BOARDS): return {...state, fetch_boards: {load: true}};

      case done(FETCH_IDEAS): return {...state, fetch_ideas: {done: true}};
      case fail(FETCH_IDEAS): return {...state, fetch_ideas: {fail: true}};
      case load(FETCH_IDEAS): return {...state, fetch_ideas: {load: true}};
      default: return state;
    }
}

/* Action creators */
export function fetchBoards() {
    console.log("Fetching boards");
    return dispatch => dispatch({
        type: FETCH_BOARDS,
        payload: axios.get(`/api/boards`)
    }).then(
        response => {
            let grouped = lodash.groupBy(response.data, "category");
            console.log(grouped);
            dispatch(setBoards(grouped));
        }, 
        error => { console.log("Error fetching boards:", error) } // TODO: dispatch showErrorMessage(response.statusText) or smth
    )
}


export function fetchIdeas(board_id) {
    console.log("Fetching ideas");
    return dispatch => dispatch({
        type: FETCH_IDEAS,
        payload: axios.get(`/api/boards/${board_id}/ideas`)
    }).then(
        response => {
            console.log(response.data);
            dispatch(setIdeas(response.data));
        },
        error => { console.log("Error fetching ideas:", error) } // TODO: dispatch showErrorMessage(response.statusText) or smth
    )
}