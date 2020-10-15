import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import articles from "./articleReduser";

const store = createStore(
  combineReducers({ articles }),
  applyMiddleware(reduxThunk)
);

export default store;
