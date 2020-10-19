import React from 'react';
import style from './Heder.module.scss';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className={style.login}>
      <Link to="/sign-in">Sign In</Link>
      <Link to="/sign-up">Sign Up</Link>
    </div>
  );
};

export default Login;
