import {combineReducers} from "redux";
import calcReducer from "./calcReducer";


export const rootReducer = combineReducers({
    calcReducer: calcReducer
})