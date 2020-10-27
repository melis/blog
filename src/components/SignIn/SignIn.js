import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './SignIn.module.scss';
import * as actions from '../../store/userActions';

const SignIn = props => {
  const { register, handleSubmit, errors } = useForm();
  const { setUser, error } = props;

  const onSubmit = data => {
    setUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.signIn}>
      <div className={style.title}>Sign In</div>
      <label htmlFor="1">
        <div>Email addres</div>
        <input
          id="1"
          className={errors.email && style.error}
          name="email"
          ref={register({
            required: 'email',
            maxLength: 50,
          })}
          type="text"
        />
        {errors.email && <p>Your {errors.email.message} is required</p>}
      </label>
      <label htmlFor="2">
        <div>Password</div>
        <input
          id="2"
          className={errors.password && style.error}
          name="password"
          ref={register({
            required: 'password',
            maxLength: 40,
          })}
          type="password"
        />
        {errors.password && <p>Your {errors.password.message} is required</p>}
      </label>
      {error ? <p>{error}</p> : null}
      <input type="submit" className={style.submit} />
      <div className={style.info}>
        Dont have an accaunt? <Link to="/sign-up">Sign Up</Link>
      </div>
    </form>
  );
};
const mapStateToProps = state => {
  return {
    error: state.user.error,
  };
};
SignIn.propTypes = {
  setUser: PropTypes.func,
  error: PropTypes.string,
};
export default connect(mapStateToProps, actions)(SignIn);
