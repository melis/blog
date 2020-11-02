import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import reduxThunk from 'redux-thunk';
import rootReduser from './rootReduser';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = createStore(rootReduser, composeEnhancers(applyMiddleware(reduxThunk)));
export const persistor = persistStore(store);
export default { store, persistor };
