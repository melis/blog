import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import articles from "./articlesReduser";
import article from "./articleReduser";

const store = createStore(
  combineReducers({ articles, article }),
  applyMiddleware(reduxThunk)
);

export default store;
