import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import store from "./store/store";
import { Provider } from "react-redux";
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
