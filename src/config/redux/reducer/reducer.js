import { combineReducers } from "redux";
import glogalReducer from "./globalReducer";
import homeReducer from "./homeReducer";
import createBlogReducer from "./createBlogReducer";

const reducer = combineReducers({ homeReducer, glogalReducer, createBlogReducer })

export default reducer;