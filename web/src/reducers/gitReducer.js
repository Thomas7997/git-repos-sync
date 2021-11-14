import {
    GOT_REPOS,
    ERROR_REPOS,
    UNLOGGED_IN,
    LOGGED_IN,
    LOGGED_OUT,
    GOT_URL,
    MISSING_URL
} from '../actions/types';

const initialState = {
    success : null,
    auth : null,
    isLoading : true,
    msg : "",
    repos : [],
    repo : {},
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    user: JSON.parse(localStorage.getItem("user")) || null,
    url : "",
    proxy : ""
};

export default (state = initialState, action) => {
    const { payload } = action;
    console.log(payload);
    switch (action.type) {
        case GOT_REPOS :
            return {
                ...state,
                success : true,
                isLoading : false,
                repos : payload.data
            };
        case ERROR_REPOS :
            return {
                ...state,
                isLoading : false,
                success : false
            };
        case LOGGED_IN: {
            localStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn))
            localStorage.setItem("user", JSON.stringify(action.payload.user))
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn,
                user: action.payload.user,
                success : true,
                isLoading : false
            };
        }
        case UNLOGGED_IN : {
            return {
                ...state,
                success : false,
                isLoading : false
            };
        }
        case LOGGED_OUT: {
            localStorage.clear()
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        }
        case GOT_URL :
            return {
                ...state,
                success : true,
                isLoading : false,
                url : payload.url,
                proxy : payload.proxy_url
            };
        case MISSING_URL :
            return {
                ...state,
                success : false,
                isLoading : false
            };
        default :
            return state;
    }
}