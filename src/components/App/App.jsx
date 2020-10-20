import React from 'react';
import styles from './App.module.scss';
import Heder from '../Heder/Heder';
import Content from '../Content/Content';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Slug from '../Slug/Slug';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import { connect } from 'react-redux';
import EditUser from '../EditUser/EditUser';

const App = (props) => {
  const { loggedIn } = props;
  return (
    <div className={styles.app}>
      <Router>
        <Heder />
        <Route path="/" exact component={Content} />
        <Route path="/articles" exact component={Content} />
        <Route path="/articles/:slugName" exact component={Slug} />
        <Route path="/profile" exact component={EditUser} />
        <Route path="/sign-in" exact>
          {loggedIn ? <Redirect to="/" /> : <SignIn />}
        </Route>
        <Route path="/sign-up" exact>
          {loggedIn ? <Redirect to="/" /> : <SignUp />}
        </Route>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.user.user,
  };
};

export default connect(mapStateToProps)(App);
