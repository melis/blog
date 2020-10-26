import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import articles from './articlesReduser';
import slug from './slugReduser';
import user from './userReduser';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReduser = combineReducers({ articles, slug, user });

export default persistReducer(persistConfig, rootReduser);
