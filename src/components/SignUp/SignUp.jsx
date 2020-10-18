import React from "react";
import style from "./SignUp.module.scss";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.signIn}>
      <div className={style.title}>Create new accaunt</div>
      <label>
        <div>Email addres</div>
        <input name="email" ref={register} type="email" />
      </label>
      <label>
        <div>Password</div>
        <input name="password" ref={register} type="password" />
      </label>

      <input type="submit" className={style.submit} />
      <div className={style.info}>
        Don't have an accaunt? <Link to="/sign-up">Sign Up</Link>
      </div>
    </form>
  );
};
export default SignUp;
