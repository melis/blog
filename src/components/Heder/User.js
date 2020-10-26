import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../../store/userActions';
import style from './Heder.module.scss';

const User = (props) => {
  const { user, logOut } = props;

  return (
    <div className={style.login}>
      <Link to="/new-article" className={style.green}>
        Create article
      </Link>
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
User.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
