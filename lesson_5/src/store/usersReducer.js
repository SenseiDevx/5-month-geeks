// Thunk название библиотеки  мидлвейр чтото срабатывает по середине ее назначение

import axios from "axios"

const ADD_USERS = "ADD_USERS"

const initialState = {
    todos: []
}
export const usersReducer = (state = initialState, action) => {
    if (action.type === ADD_USERS) {
        return {users: action.payload}
    }
    return state
}
//экшн креэйтер
const addUsers = (payload) => ({type: ADD_USERS, payload})

// thunk
//axios

export const fetchUsers = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            resp => dispatch(
                addUsers(resp.data)
            ))
    }
}

