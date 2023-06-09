import axios from "axios"

const initialState = {
    todos: [],
}

const todoReducer = (state = initialState, action) => {
    if (action.type === 'ADD_TODO') {
        return { ...state, todos: [...state.todos, action.payload] }
    } else if (action.type === 'REMOVE_TODO') {
        return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload)
        }
    } else if (action.type === 'SET_TODOS') {
        return { ...state, todos: action.payload }
    } else {
        return state
    }
}

export const addTodo = (payload) => {
    return (dispatch) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', payload)
            .then((response) => {
                dispatch({ type: 'ADD_TODO', payload: response.data })
            })
            .catch((error) => {
                console.log('Error adding todo:', error)
            })
    }
}

export const deleteTodo = (payload) => {
    return (dispatch) => {
        fetch(`URL/${payload}`, { method: 'DELETE' })
            .then(() => {
                dispatch({ type: 'REMOVE_TODO', payload })
            })
            .catch((error) => {
                console.log('Error deleting todo:', error)
            })
    }
}

export default todoReducer
