import { GET, PROFESSIONAL_LIST } from "./action-types";
const initialState = {
    test: [],
    orderBy: [
        {value: "nameAsc", name: "Name Asc"},
        {value: "nameDesc", name: "Name Desc"}
    ],
    availability: [
        {value: "available", name: "Available"},
        {value: "unavailable", name: "Unavailable"}
    ],
    professionalList: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET:
            return Object.assign({}, state, { test: action.payload });
        case PROFESSIONAL_LIST:
            return Object.assign({}, state, { professionalList: action.payload });
        default:
            break;
    }

    return state;
}
export default rootReducer;