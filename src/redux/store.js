import { applyMiddleware, createStore } from 'redux';
import {logger} from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducer";

let middleware = [logger, thunk];
const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
