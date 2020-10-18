import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import articles from "./articlesReduser";
import slug from "./slugReduser";
import user from "./userReduser";
const store = createStore(
  combineReducers({ articles, slug, user }),
  applyMiddleware(reduxThunk)
);

export default store;
