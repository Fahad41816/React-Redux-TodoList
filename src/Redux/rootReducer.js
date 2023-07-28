import { combineReducers } from "redux";
import  TodoReducer from './todos/todoReducer'
import filterReducer from "./filter/filterReducer";

const reducer = combineReducers({
    todo: TodoReducer,
    filter: filterReducer
})

export default reducer