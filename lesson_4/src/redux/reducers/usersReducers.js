import {types} from "../types";

const initialState = {
    usersList: []
}

export default function usersReducer(state = initialState, action){
    switch (action.type){
        case types.ADD_USER:
            return {
                ...state,
                usersList: [...state.usersList, action.payload]
            }
        case types.DELETE_ALL:
            return {
                ...state,
                usersList: action.payload,
            }
        default:
            return state
    }
}