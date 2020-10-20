import React, { useEffect } from 'react';
import style from './SignIn.module.scss';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/userActions';

const SignIn = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const { setUser, error, resetError } = props;

  const onSubmit = (data) => {
    setUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.signIn}>
      <div className={style.title}>Sign In</div>
      <label>
        <div>Email addres</div>
        <input
          className={errors.email && style.error}
          name="email"
          ref={register({
            required: 'email',
            maxLength: 20,
          })}
          type="text"
        />
        {errors.email && <p>Your {errors.email.message} is required</p>}
      </label>
      <label>
        <div>Password</div>
        <input
          className={errors.password && style.error}
          name="password"
          ref={register({
            required: 'password',
            maxLength: 20,
          })}
          type="password"
        />
        {errors.password && <p>Your {errors.password.message} is required</p>}
      </label>
      {error ? <p>{error}</p> : null}
      <input type="submit" className={style.submit} />
      <div className={style.info}>
        Don't have an accaunt? <Link to="/sign-up">Sign Up</Link>
      </div>
    </form>
  );
};
const mapStateToProps = (state) => {
  return {
    error: state.user.error,
  };
};
export default connect(mapStateToProps, actions)(SignIn);
