import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';

const Login = () => {
  return (
    <div className={style.login}>
      <Link to="/sign-in">Sign In</Link>
      <Link to="/sign-up">Sign Up</Link>
    </div>
  );
};

export default Login;
