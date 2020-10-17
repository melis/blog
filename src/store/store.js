import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import articles from "./articlesReduser";
import slug from "./slugReduser";

const store = createStore(
  combineReducers({ articles, slug }),
  applyMiddleware(reduxThunk)
);

export default store;
