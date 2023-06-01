import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import todoReducer from "./todoReducer/todoReducer";

const rootReducer = combineReducers({
    todos: todoReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store