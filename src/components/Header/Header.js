import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './Header.module.scss';
import Login from './Login';
import User from './User';

const Heder = (props) => {
  const { userOn } = props;

  return (
    <div className={style.heder}>
      <div className={style.container}>
        <div className={style.title}>
          <Link to="/">Realworld Blog</Link>
        </div>
        {userOn ? <User /> : <Login />}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userOn: !!state.user.user,
  };
};
Heder.propTypes = {
  userOn: PropTypes.bool,
};
export default connect(mapStateToProps)(Heder);
