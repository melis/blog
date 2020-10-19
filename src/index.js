import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,

  document.getElementById('root'),
);
