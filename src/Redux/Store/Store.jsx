import charReducer from "../Reducers/DetailsReducer";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ personaggio: charReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
