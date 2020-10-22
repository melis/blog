import React, { useState, useEffect } from 'react';
import style from './NewArticle.module.scss';
import { useForm } from 'react-hook-form';
import Tags from '../Tags/Tags';

const NewArticle = (props) => {
  const { register, handleSubmit, errors, setError } = useForm();
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');
  const taglist = listCreator(tags);

  console.log(tags);
  const onSubmit = (a) => {
    const newArticle = {
      ...a,
      tags,
    };
    console.log(newArticle);
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
          {taglist}

          <div className={style.add}>
            <input
              type="text"
              value={newTag}
              onChange={(a) => {
                setNewTag(a.target.value);
              }}
            />
            <span
              onClick={() => {
                if (newTag) {
                  setTags([...tags, newTag]);
                }
              }}
            >
              Add tag
            </span>
          </div>
        </div>
        <Tags tags={tags} setTags={setTags} />
        <input type="submit" />
      </form>
    </div>
  );
};
export default NewArticle;

function listCreator(tags) {
  let i = 0;
  if (tags.length) {
    return tags.map((tag) => {
      return <div key={i++}>{tag}</div>;
    });
  }
  return null;
}

// {
//   "article": {
//     "title": "How to train your dragon",
//     "description": "Ever wonder how?",
//     "body": "You have to believe",
//     "tagList": ["reactjs", "angularjs", "dragons"]
//   }
// }
