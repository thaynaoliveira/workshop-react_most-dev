import { GET } from "./action-types";
const initialState = {
    test: [],
    orderBy: [
        {value: "nameAsc", name: "Name Asc"},
        {value: "nameDesc", name: "Name Desc"}
    ],
    availability: [
        {value: "available", name: "Available"},
        {value: "unavailable", name: "Unavailable"}
    ]
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET:
            return Object.assign({}, state, { test: action.payload });
        default:
            break;
    }

    return state;
}
export default rootReducer;