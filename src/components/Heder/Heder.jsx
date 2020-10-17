import React from "react";
import style from "./Heder.module.scss";
import { Link } from "react-router-dom";
const Heder = () => {
  return (
    <div className={style.heder}>
      <div className={style.container}>
        <div className={style.title}>
          <Link to="/">Realworld Blog</Link>
        </div>
        <div className={style.login}>
          <div>Sign In</div>
          <div>Sign Up</div>
        </div>
      </div>
    </div>
  );
};
export default Heder;
