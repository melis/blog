import articles from './articlesReduser';
import slug from './slugReduser';
import user from './userReduser';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReduser = combineReducers({ articles, slug, user });

export default persistReducer(persistConfig, rootReduser);
