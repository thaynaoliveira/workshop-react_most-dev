import request from 'axios';
import { API_URL, GET, PROFESSIONAL_LIST } from "./action-types";

export function funcGet() {
    return dispatch => {
        request.get(API_URL + 'add_end_point')
            .then(response => {
                dispatch(setReducer(GET, response.data));
            });
    }
}

export function getProfessionalsList() {
    return dispatch => {
        request.get(API_URL + '5d2c779e3100005200f5a948')
            .then(response => {
                dispatch(setReducer(PROFESSIONAL_LIST, response.data));
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