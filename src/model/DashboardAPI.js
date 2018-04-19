import axios from 'axios';
import lodash from 'lodash';
import { setBoards, setIdeas } from '.';

const done = action => action+"_FULFILLED";
const fail = action => action+"_REJECTED";
const load = action => action+"_PENDING";

const URL = "http://192.168.137.131:8080";

/* Action types */
const FETCH_BOARDS = "dotmocracy/Dashboard/FETCH_BOARDS";
const FETCH_IDEAS = "dotmocracy/Dashboard/FETCH_IDEAS";

/* Reducer */
const initial_state = {
    fetch_boards: {load: null, fail: null, done: null},
    fetch_ideas: {load: null, fail: null, done: null},
    boards: null
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
export const fetchBoards = () => dispatch => {
    console.log("Fetching boards");
    dispatch({
        type: FETCH_BOARDS,
        payload: axios.get(`${URL}/api/boards`)
    }).then(
        (response) => {
            console.log("Response:", response.value.data);
            console.log("Re-grouping response with lodash");
            let grouped = lodash.groupBy(response.value.data, "category");
            console.log("Grouped:", grouped);
            dispatch(setBoards(grouped));
        }, 
        (error) => { 
            console.log("Error fetching boards:", error)
            // TODO: dispatch showErrorMessage(response.statusText) or smth
        } 
    )
}


export const fetchIdeas = (board_id) => dispatch => {
    console.log("Fetching ideas");
    dispatch({
        type: FETCH_IDEAS,
        payload: axios.get(`${URL}/api/boards/${board_id}/ideas`)
    }).then(
        response => {
            console.log(response.data);
            dispatch(setIdeas(response.data));
        },
        error => { 
            console.log("Error fetching ideas:", error) 
            // TODO: dispatch showErrorMessage(response.statusText) or smth
        } 
    )
}