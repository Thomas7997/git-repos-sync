import axios from 'axios';
import {
    GOT_REPOS,
    ERROR_REPOS,
    UNLOGGED_IN,
    LOGGED_IN,
    LOGGED_OUT
} from './types';
import axios from 'axios';

const ip = "127.0.0.1";
axios.defaults.baseURL = `http://${ip}:5000`;

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