import React from 'react';
import style from './SignIn.module.scss';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/userActions';

const SignIn = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const { setUser } = props;
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

      <input type="submit" className={style.submit} />
      <div className={style.info}>
        Don't have an accaunt? <Link to="/sign-up">Sign Up</Link>
      </div>
    </form>
  );
};

export default connect(null, actions)(SignIn);

{
  /* <form onSubmit={handleSubmit(onSubmit)}>
  <input
    name="firstName"
    ref={register({ required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })}
  />
  <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
  <input name="age" type="number" ref={register({ min: 18, max: 99 })} />
  <input type="submit" />
</form>; */
}
