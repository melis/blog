import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './EditUser.module.scss';
import * as actions from '../../store/userActions';

const EditUser = (props) => {
  const { error, user, updUser } = props;

  const { register, handleSubmit, errors } = useForm();
  const [userName, setUserName] = useState(user.username);
  const [userEmail, setUserEmail] = useState(user.email);
  const [userImgUrl, setUserImgUrl] = useState(user.image);
  const [userPassword, setUserPassword] = useState('');

  const onSubmit = (a) => {
    setUserPassword('');
    updUser(a, user.token);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.editUser}>
      <div className={style.title}>Edit profile</div>
      <label>
        <div>Username</div>
        <input
          onChange={(a) => {
            setUserName(a.target.value);
          }}
          className={errors.userName && style.error}
          value={userName}
          name="username"
          ref={register({
            required: 'username',
            minLength: 3,
            maxLength: 20,
          })}
          type="text"
        />
        {errors.username && <p>Your {errors.username.message} is required</p>}
      </label>
      <label>
        <div>Email addres</div>
        <input
          onChange={(a) => {
            setUserEmail(a.target.value);
          }}
          value={userEmail}
          className={errors.email && style.error}
          name="email"
          ref={register({
            required: 'email',
            maxLength: 50,
          })}
          type="email"
        />
        {errors.email && <p>Your {errors.email.message} is required</p>}
      </label>
      <label>
        <div>New password</div>
        <input
          onChange={(a) => {
            setUserPassword(a.target.value);
          }}
          value={userPassword}
          className={errors.password_1 && style.error}
          name="password"
          ref={register({
            required: 'password',
            minLength: 8,
            maxLength: 40,
          })}
          type="password"
        />
        {errors.password && <p>Your {errors.password.message} is required</p>}
      </label>
      <label>
        <div>Avatar image (url)</div>
        <input
          onChange={(a) => {
            setUserImgUrl(a.target.value);
          }}
          value={userImgUrl}
          className={errors.imgUrl && style.error}
          name="image"
          ref={register({})}
          type="url"
        />
        {errors.imgUrl && <p>Your {errors.imgUrl.message} is required</p>}
      </label>

      {error ? <p>{error}</p> : null}
      <input type="submit" className={style.submit} value="Save" />
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    error: state.user.error,
    user: state.user.user,
  };
};
EditUser.propTypes = {
  error: PropTypes.string,
  user: PropTypes.object,
  updUser: PropTypes.func,
};
export default connect(mapStateToProps, actions)(EditUser);
