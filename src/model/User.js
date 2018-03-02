import { hideLoginRegisterForm } from '.'

/* Action types */
const SET_USER = "dotmocracy/User/set_user";
const DROP_USER = "dotmocracy/User/drop_user"

/* Reducer */
const initial_state = {
    user: null,
};
export default function reducer(state = initial_state, action = {}) {
    switch (action.type) {
      case SET_USER: return {...state, user: action.payload};
      case DROP_USER: return {...state, user: null};
      default: return state;
    }
  }


/* Action creators */
export const setUser = (user) => ({
    type: SET_USER,
    payload: dispatch => {
        dispatch(hideLoginRegisterForm);
        dispatch({type: SET_USER});
    }
})

export const dropUser = () => ({
    type: DROP_USER
})