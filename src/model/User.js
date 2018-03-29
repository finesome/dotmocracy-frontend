import { hideLoginRegisterForm } from '.'

/* Action types */
const SET_USER = "dotmocracy/User/SET_USER";
const DROP_USER = "dotmocracy/User/DROP_USER";

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
export const setUser = ( user ) => {
    return ( dispatch ) => {
        dispatch( {
            type: SET_USER,
            payload: {user}
        } );
        dispatch( hideLoginRegisterForm() );
    }
};

export const dropUser = () => ({
    type: DROP_USER
});