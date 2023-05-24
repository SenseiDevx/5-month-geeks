import { createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    items: []
}



const todoReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id: nanoid(),
                text: action.payload,
                completed: false
            })
        },
        deleteTodo: (state, action) => {
            state.items = action.payload
        },
        toggleTodo: (state, action) => {
            const todo = state.items.find((item) => item.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
})

export const {addTodo, deleteTodo, toggleTodo} = todoReducer.actions
export default todoReducer.reducer
export const todoSelect = state => state.todos