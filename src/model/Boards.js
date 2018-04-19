import { DROP_USER } from '.'

/* Action types */
const SET_BOARDS = "dotmocracy/Boards/SET_BOARDS"

/* Reducer */
const initial_state = {
    boards: null,
}

export default function reducer( state = initial_state, action = {} ) {
    switch ( action.type ) {
        case SET_BOARDS:
            return { ...state, boards: action.payload };
        case DROP_USER:
            return { ...state, boards: null };
        default:
            return state;
    }
}

/* Action creators */
export const setBoards = (boards) => dispatch => {
    dispatch({
        type: SET_BOARDS,
        payload: { boards }
    }).then(
        (response) => {
            console.log("Set boards");
        },
        (error) => { 
            console.log("Error setting boards");
        }
    )
}