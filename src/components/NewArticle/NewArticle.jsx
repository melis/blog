import React, { useState, useEffect } from 'react';
import style from './NewArticle.module.scss';
import { useForm } from 'react-hook-form';
import Tags from '../Tags/Tags';
import { connect } from 'react-redux';
import * as actions from '../../store/slugActions';
import { withRouter } from 'react-router';

const NewArticle = (props) => {
  const { createSlug, token, history } = props;
  const { register, handleSubmit, errors, setError } = useForm();
  const [tags, setTags] = useState([]);

  const onSubmit = (a) => {
    const newArticle = {
      ...a,
      tagList: tags,
    };

    createSlug(newArticle, token, history);
  };

  return (
    <div className={style.article}>
      <h1>Create new article</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <div>Title</div>
          <input
            className={errors.title ? style.error : ''}
            name="title"
            ref={register({
              required: 'title',
              minLength: 5,
              maxLength: 20,
            })}
            type="text"
          />
          {errors.title && <p>Your {errors.title.message} is required</p>}
        </label>
        <label>
          <div>Short description</div>
          <input
            className={errors.description ? style.error : ''}
            name="description"
            ref={register({
              required: 'description',
              minLength: 10,
              maxLength: 100,
            })}
            type="text"
          />
          {errors.description && <p>Your {errors.description.message} is required</p>}
        </label>
        <label>
          <div>Text</div>
          <textarea
            className={errors.body ? style.error : ''}
            name="body"
            ref={register({
              required: 'article body',
              minLength: 10,
            })}
          />
          {errors.body && <p>Your {errors.body.message} is required</p>}
        </label>
        <div className={style.tags}>
          <div>Tags</div>
          <Tags tags={tags} setTags={setTags} />
        </div>

        <input type="submit" value="Send" className={style.submit} />
      </form>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.user.user.token,
  };
};
export default withRouter(connect(mapStateToProps, actions)(NewArticle));
