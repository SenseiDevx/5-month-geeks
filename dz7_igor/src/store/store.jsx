import { configureStore } from "@reduxjs/toolkit"
import todosReducer from './todoSlice/todosSlice.jsx'

const store = configureStore({
    reducer: {
        todos: todosReducer
    }
})

export default store