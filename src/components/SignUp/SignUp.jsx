import React, { useState } from 'react';
import style from './SignUp.module.scss';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/userActions';
import { Checkbox } from 'antd';

const SignUp = (props) => {
  const { error, createUser } = props;
  const { register, handleSubmit, errors, setError } = useForm();
  const [chek, setChek] = useState(false);
  const onSubmit = (data) => {
    if (data.password_1 === data.password_2) {
      createUser(data);
    } else {
      setError('password_1', { type: 'same', message: 'repeat password' });
      setError('password_2', { type: 'same', message: 'repeat password' });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.signUp}>
      <div className={style.title}>Create new accaunt</div>
      <label>
        <div>Username</div>
        <input
          className={errors.username && style.error}
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
        <div>Password</div>
        <input
          className={errors.password_1 && style.error}
          name="password_1"
          ref={register({
            required: 'password',
            minLength: 8,
            maxLength: 40,
          })}
          type="password"
        />
        {errors.password_1 && <p>Your {errors.password_1.message} is required</p>}
      </label>
      <label>
        <div>Repeat password</div>
        <input
          className={errors.password_2 && style.error}
          name="password_2"
          ref={register({
            required: 'password',
            minLength: 8,
            maxLength: 40,
          })}
          type="password"
        />
        {errors.password_2 && <p>Your {errors.password_2.message} is required</p>}
      </label>
      {error ? <p>{error}</p> : null}
      <Checkbox
        required
        onChange={(a) => {
          setChek(a.target.checked);
        }}
        className={style.chekbox}
        checked={chek}
      >
        I agree to the processing of my personal information
      </Checkbox>
      <input type="submit" className={style.submit} />
      <div className={style.info}>
        Alredy have an accaunt? <Link to="/sign-in">Sign In</Link>
      </div>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    error: state.user.error,
  };
};
export default connect(mapStateToProps, actions)(SignUp);
