import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import articles from './articles/articlesReduser';
import slug from './slug/slugReduser';
import user from './user/userReduser';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const rootReduser = combineReducers({ articles, slug, user });

export default persistReducer(persistConfig, rootReduser);
