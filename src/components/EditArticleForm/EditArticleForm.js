import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import style from './EditArticleForm.module.scss';
import Tags from '../Tags/Tags';
import Tag from '../Tag/Tag';

const ArticleForm = (props) => {
  const { token, history, submit, slug } = props;
  const { register, handleSubmit, errors, setValue } = useForm();
  const [tags, setTags] = useState(slug ? [...slug.tagList] : []);
  const [newTag, setNewTag] = useState('');

  const onSubmit = (a) => {
    const newArticle = {
      ...a,
      tagList: tags,
    };
    submit(newArticle, token, history, slug ? slug.slug : null);
  };
  useEffect(() => {
    if (slug) {
      setValue('title', slug.title);
      setValue('description', slug.description);
      setValue('body', slug.body);
    }
  }, [slug]);

  useEffect(() => {
    console.log(tags);
  });

  const taglist = tags.map((el) => {
    return <Tag key={el} el={el} />;
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="1">
        <div>Title</div>
        <input
          id="1"
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
      <label htmlFor="2">
        <div>Short description</div>
        <input
          id="2"
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
      <label htmlFor="3">
        <div>Text</div>
        <textarea
          id="3"
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
        <div>{taglist}</div>
        {/* <Tags tags={slug ? slug.tagList : []} setTags={setTags} /> */}
        <input
          type="text"
          placeholder="new tag"
          value={newTag}
          onChange={(a) => {
            setNewTag(a.target.value);
          }}
        />
        <span
          className={style.add}
          onClick={() => {
            if (newTag) setTags([...tags.filter((el) => el !== newTag), newTag]);
          }}
        >
          Add tag
        </span>
      </div>

      <input type="submit" value="Save" className={style.submit} />
    </form>
  );
};
ArticleForm.propTypes = {
  token: PropTypes.string,
  history: PropTypes.object,
  submit: PropTypes.func,
  slug: PropTypes.object,
};
export default withRouter(ArticleForm);
