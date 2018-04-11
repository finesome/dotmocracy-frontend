import { DROP_USER } from '.'

/* Action types */
const SET_IDEAS = "dotmocracy/Boards/SET_IDEAS"

/* Reducer */
const initial_state = {
    ideas: null,
}

export default function reducer( state = initial_state, action = {} ) {
    switch ( action.type ) {
        case SET_IDEAS:
            return { ...state, ideas: action.payload };
        case DROP_USER:
            return { ...state, ideas: null };
        default:
            return state;
    }
}

/* Action creators */
export const setIdeas = (ideas) => dispatch => {
    dispatch({
        type: SET_IDEAS,
        payload: { ideas }
    }).then(
        error => { console.log("It cannot happen") }
    )
}