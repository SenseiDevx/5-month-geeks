import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counterReducer/counterReducer";
import todoReducer from "./todoReducer/todoReducer";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todos: todoReducer
    }
})