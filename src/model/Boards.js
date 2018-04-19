import { DROP_USER } from '.'

/* Action types */
const SET_BOARDS = "dotmocracy/Boards/SET_BOARDS"
const SET_IDEAS = "dotmocracy/Boards/SET_IDEAS"

/* Reducer */
const initial_state = {
    boards: null,
    ideas: null
}

export default function reducer( state = initial_state, action = {} ) {
    switch ( action.type ) {
        case SET_BOARDS:
            return { ...state, boards: action.payload };
        case DROP_USER:
            return { ...state, boards: null };
        case SET_IDEAS:
            return { ...state, ideas: action.payload };
        default:
            return state;
    }
}

/* Action creators */
export const setBoards = (boards) => {
    return dispatch => {
        dispatch({
            type: SET_BOARDS,
            payload: { boards }
        })
    }
}

export const setIdeas = (ideas) => {
    return dispatch => {
        dispatch({
            type: SET_IDEAS,
            payload: { ideas }
        })
    }
}