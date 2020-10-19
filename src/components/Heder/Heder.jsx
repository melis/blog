import React from "react";
import style from "./Heder.module.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Heder = (props) => {
  const { user } = props;
  return (
    <div className={style.heder}>
      <div className={style.container}>
        <div className={style.title}>
          <Link to="/">Realworld Blog</Link>
        </div>
        <div className={style.login}>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};
as
export default connect(mapStateToProps)(Heder);
