import React from "react";
import styles from "./App.module.scss";
import Heder from "../Heder/Heder";
import Content from "../Content/Content";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Slug from "../Slug/Slug";

const App = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Heder />
        <Route path="/" exact component={Content} />
        <Route path="/articles" exact component={Content} />
        <Route path="/articles/:slug" exact component={Slug} />
      </Router>
    </div>
  );
};
export default App;
