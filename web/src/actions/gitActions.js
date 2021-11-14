import axios from 'axios';
import {
    GOT_REPOS,
    ERROR_REPOS,
    UNLOGGED_IN,
    LOGGED_IN,
    LOGGED_OUT,
    GOT_URL,
    MISSING_URL
} from './types';

const ip = "127.0.0.1";
axios.defaults.baseURL = `http://${ip}:5000`;

export const getGithubAuthorizeUrl = () => async dispatch => {
    try {
        const res = await axios.get(`/url`);
        dispatch({
            type : GOT_URL,
            payload : res.data
        });
    }

    catch (err) {
        console.log(err);
        dispatch({
            type : MISSING_URL
        }); 
    }
}

export const getRepos = () => async dispatch => {
    try {
        const res = await axios.get(`/list`);
        dispatch({
            type : GOT_REPOS,
            payload : res.data
        });
    }

    catch (err) {
        console.log(err);
        dispatch({
            type : ERROR_REPOS
        });
    }
}

export const authGitUser = (rd, proxy) => async dispatch => {
    fetch(proxy, {
        method: "POST",
        body: JSON.stringify(rd),
        headers : {
            Accept : "application/vnd.github.v3+json"
        }
    })
    .then(response => response.json())
    .then(data => {
        dispatch({
            type: LOGGED_IN,
            payload: { user: data, isLoggedIn: true }
        });
    })
    .catch(error => {
        console.log(error);
        dispatch({
            type : UNLOGGED_IN,
            payload : {
                isLoading: false,
                errorMessage: "Sorry! Login failed"
            }
        });
    });
}