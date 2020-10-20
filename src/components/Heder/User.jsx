import React from 'react';
import style from './Heder.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/userActions';
import { Link } from 'react-router-dom';

const User = (props) => {
  const { user, logOut } = props;
  console.log(user);
  return (
    <div className={style.login}>
      <Link to="/profile">{user.username}</Link>
      <div className={style.userImg}>
        <img src={user.image} alt="" />
      </div>
      <Link to="/" onClick={logOut} className={style.logout}>
        LogOut
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { logOut } = bindActionCreators(actions, dispatch);
  return {
    logOut,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
