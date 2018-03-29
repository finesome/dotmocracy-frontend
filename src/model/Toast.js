/* Action types */
const SHOW_ERROR_MESSAGE = "dotmocracy/Toast/SHOW_ERROR_MESSAGE";
const SHOW_SUCCESS_MESSAGE = "dotmocracy/Toast/SHOW_SUCCESS_MESSAGE";
const SET = "dotmocracy/Toast/SET";
const RESET = "dotmocracy/Toast/RESET";


/* Reducer */
const initial_state = {
    isDisplayed: false,
    isError: false,
    text: ""
};

export default function reducer( state = initial_state, action = {} ) {
    switch ( action.type ) {
        case SET:
            return { ...state, ...action.payload };
        case RESET:
            return initial_state;
        default:
            return state;
    }
}


/* Action creators */
const set = ( text, isError, isDisplayed ) => ({
    type: SET,
    payload: { text, isError, isDisplayed }
});

const reset = () => ({
    type: RESET
});

export const displayError = ( text ) => set( text, true, true );
export const displaySuccess = ( text ) => set( text, false, true );
export const hideToast = () => reset();