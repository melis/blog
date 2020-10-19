import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import reduxThunk from 'redux-thunk';
import rootReduser from './rootReduser';

export const store = createStore(rootReduser, applyMiddleware(reduxThunk));
export const persistor = persistStore(store);
export default { store, persistor };
