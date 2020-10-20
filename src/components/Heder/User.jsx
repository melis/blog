import React from 'react';
import style from './Heder.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/userActions';
import { Link } from 'react-router-dom';

const User = (props) => {
  const { user, logOut } = props;

  return (
    <div className={style.login}>
      <Link to="/profile">{user.username}</Link>
      <Link to="/" onClick={logOut}>
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
