import React from 'react';
import styles from './App.module.scss';
import Heder from '../Heder/Heder';
import Content from '../Content/Content';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Slug from '../Slug/Slug';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

const App = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Heder />
        <Route path="/" exact component={Content} />
        <Route path="/articles" exact component={Content} />
        <Route path="/articles/:slugName" exact component={Slug} />
        <Route path="/sign-in" exact component={SignIn} />
        <Route path="/sign-up" exact component={SignUp} />
      </Router>
    </div>
  );
};
export default App;
