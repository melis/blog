import React, { useState, useEffect } from 'react';
import style from './EditArticleForm.module.scss';
import { useForm } from 'react-hook-form';
import Tags from '../Tags/Tags';
import { withRouter } from 'react-router';

const ArticleForm = (props) => {
  const { token, history, submit, slug } = props;
  const { register, handleSubmit, errors, setError, setValue } = useForm();
  const [tags, setTags] = useState([]);

  const onSubmit = (a) => {
    const newArticle = {
      ...a,
      tagList: tags,
    };
    submit(newArticle, token, history, slug.slug);
  };
  useEffect(() => {
    setValue('title', slug.title);
    setValue('description', slug.description);
    setValue('body', slug.body);
  }, []);

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
        <Tags tags={slug.tagList} setTags={setTags} />
      </div>

      <input type="submit" value="Save" className={style.submit} />
    </form>
  );
};

export default withRouter(ArticleForm);
