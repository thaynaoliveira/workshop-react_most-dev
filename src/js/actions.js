import request from 'axios';
import { API_URL, GET } from "./action-types";

export function funcGet() {
    return dispatch => {
        request.get(API_URL + 'add_end_point')
            .then(response => {
                dispatch(setReducer(GET, response.data));
            });
    }
}

export function filterDevs() {
    //write your code here
}

function setReducer(type, data) {
    return {
        type: type,
        payload: data
    }
}