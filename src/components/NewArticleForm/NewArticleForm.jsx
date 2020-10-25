import React, { useState, useEffect } from 'react';
import style from './NewArticleForm.module.scss';
import { useForm } from 'react-hook-form';
import Tags from '../Tags/Tags';
import { withRouter } from 'react-router';

const ArticleForm = (props) => {
  const { token, history, submit } = props;
  const { register, handleSubmit, errors, setError } = useForm();
  const [tags, setTags] = useState([]);

  const onSubmit = (a) => {
    const newArticle = {
      ...a,
      tagList: tags,
    };
    submit(newArticle, token, history);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <div>Title</div>
        <input
          className={errors.title ? style.error : ''}
          name="title"
          ref={register({
            required: 'title',
            minLength: 5,
            maxLength: 50,
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
            maxLength: 300,
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
  );
};

export default withRouter(ArticleForm);
