import {types} from "./types";

export function handleTitleAction() {
    return{
        type: types.CHANGE_TITLE
    }
}

export function sayHelloAction(text) {
    return{
        type: types.WITH_PARAMS,
        payload: text
    }
}

export function addUserAction(user){
    return{
        type: types.ADD_USER,
        payload: user
    }
}

export function deleteUser(delet){
    return{
        type: types.DELETE_ALL,
        payload: delet
    }
}