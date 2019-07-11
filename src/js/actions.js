import request from 'axios';
import { API_URL, GET, POST } from "./action-types";

export function funcPost(obj) {
    return {
        type: POST,
        promise: request.post(API_URL + 'add_end_point', obj)
    }
}

export function funcGet() {
    return dispatch => {
        request.get(API_URL + 'add_end_point')
            .then(response => {
                dispatch(setReducer(GET, response.data));
            });
    }
}

function setReducer(type, data) {
    return {
        type: type,
        payload: data
    }
}