import {SET_AUTH_TOKEN, SET_CURRENT_USER, LOG_OUT_CURRENT_USER} from '../actions/auth';

const initialState = {
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: {
        username: null,
        firstName: null,
        lastName: null
    }
};

export default function userReducer(state = initialState, action) {
    //change reducer to userReducer
    if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    } else if (action.type === SET_CURRENT_USER) {
        return Object.assign({}, state, {
            currentUser: action.currentUser
        });
    } else if (action.type === LOG_OUT_CURRENT_USER) {
        return Object.assign({}, state, {
            currentUser : { username : null} 
        })
    }
    return state;
}
