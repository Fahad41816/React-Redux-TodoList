import {  createStore } from "redux";
import reducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";



const Store = createStore(reducer, composeWithDevTools() )

export default Store