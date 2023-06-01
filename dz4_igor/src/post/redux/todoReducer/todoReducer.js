import axios from "axios";

const initialState = {
    todos: [],
};

const todoReducer = (state = initialState, action) => {
    if (action.type === 'ADD_TODO') {
        return { ...state, todos: [...state.todos, action.payload] };
    } else if (action.type === 'REMOVE_TODO') {
        return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
    } else if (action.type === 'SET_TODOS') {
        return { ...state, todos: action.payload };
    } else {
        return state;
    }
};

export const fetchTodos = () => {
    return async (dispatch) => {
        try {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15');
            dispatch({ type: 'SET_TODOS', payload: resp.data });
        } catch (error) {
            console.log('Error fetching todos:', error);
        }
    };
};

export const addTodo = (payload) => {
    return (dispatch) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', payload)
            .then((resp) => {
                dispatch({ type: 'ADD_TODO', payload: resp.data });
            })
            .catch((error) => {
                console.log('Error adding todo:', error);
            });
    };
};

export const deleteTodo = (payload) => ({ type: "REMOVE_TODO", payload });

export default todoReducer;
