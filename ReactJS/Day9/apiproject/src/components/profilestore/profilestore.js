import {profileReducer} from "./profileReducer";
import { applyMiddleware, createStore } from "redux";
// import {thunk} from 'redux-thunk';
// export const profileStore = createStore(profileReducer, applyMiddleware(thunk));
export const profileStore = createStore(profileReducer);