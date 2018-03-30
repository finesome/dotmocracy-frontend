import axios from 'axios'
import {setUser, dropUser} from '.'

const done = action => action+"_FULFILLED";
const fail = action => action+"_REJECTED";
const load = action => action+"_PENDING";

/* Action types */
const ADD_BOARD = "dotmocracy/BoardAPI/addBoard";

/* Reducer */
const initial_state = {
    add_board: {load: null, fail: null, done: null},
    
};
export default function reducer(state = initial_state, action = {}) {
    switch (action.type) {
      case done(ADD_BOARD): return {...state, add_board: {done: true}};
      case fail(ADD_BOARD): return {...state, add_board: {fail: true}};
      case load(ADD_BOARD): return {...state, add_board: {load: true}};
      default: return state;
    }
  }


/* Action creators */
export function addBoard(title, category){
    return {
        type: ADD_BOARD,
        payload: axios.post('/api/boards/add', {title, category}),
    }
}