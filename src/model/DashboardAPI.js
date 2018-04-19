import axios from 'axios';
import lodash from 'lodash';
import { setBoards, setIdeas } from '.';

const done = action => action+"_FULFILLED";
const fail = action => action+"_REJECTED";
const load = action => action+"_PENDING";

const URL = "http://192.168.137.131:8080";
// const URL = "http://localhost:8080";

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

            let array = [];
            for (let key in grouped) {
                let entry = {name: key, decisions: grouped[key]};
                array.push(entry);
            }

            dispatch(setBoards(array));
        }, 
        (error) => { 
            console.log("Error fetching boards:", error);
            
            // console.log("Fake for now");
            // let data = [
            //     {
            //         id: "0",
            //         name: "Important decision 11",
            //         category: "none",
            //         isTeam: true,
            //         ideas: [
            //             { name: "Idea 111", score: 284 },
            //             { name: "Idea 112", score: 23 },
            //             { name: "Idea 113", score: 354 },
            //             { name: "Idea 114", score: 61 }
            //         ]
            //     },
            //     {
            //         id: "1",
            //         name: "Important decision 12",
            //         category: "none",
            //         subName: "Kakashi",
            //         isTeam: true,
            //         ideas: [
            //             { name: "Idea 121", score: 284 },
            //             { name: "Idea 122", score: 23 },
            //             { name: "Idea 123", score: 354 }
            //         ]
            //     },
            //     {
            //         id: "3",
            //         name: "Important decision 21",
            //         category: "food",
            //         subName: "Sakashi",
            //         isTeam: true,
            //         ideas: [
            //             { name: "Idea 211", score: 284 },
            //             { name: "Idea 212", score: 23 },
            //             { name: "Idea 213", score: 354 },
            //             { name: "Idea 214", score: 61 }
            //         ]
            //     },
            //     {
            //         id: "4",
            //         name: "Important decision 22",
            //         category: "food",
            //         isTeam: true,
            //         ideas: [
            //             { name: "Idea 221", score: 284 },
            //             { name: "Idea 222", score: 23 }
            //         ]
            //     },
            //     {
            //         id: "9",
            //         name: "Important decision 31",
            //         category: "travel",
            //         isTeam: true,
            //         ideas: [
            //             { name: "Idea 311", score: 284 },
            //             { name: "Idea 312", score: 23 },
            //             { name: "Idea 313", score: 354 },
            //             { name: "Idea 314", score: 61 }
            //         ]
            //     },
            //     {
            //         id: "10",
            //         name: "Important decision 32",
            //         category: "travel",
            //         isTeam: true,
            //         ideas: [
            //             { name: "Idea 321", score: 284 },
            //             { name: "Idea 322", score: 23 },
            //             { name: "Idea 323", score: 354 },
            //             { name: "Idea 324", score: 61 }
            //         ]
            //     }
            // ];

            // console.log("Boards data:", data);
            // console.log("Re-grouping boards data with lodash");
            // let grouped = lodash.groupBy(data, "category");
            // // console.log("Grouped:", grouped);
            // let array = [];
            // for (let key in grouped) {
            //     let entry = {name: key, decisions: grouped[key]};
            //     array.push(entry);
            // } 

            // console.log("Build array from object:", array);
            // dispatch(setBoards(array));

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