import React, { useState } from 'react';
import style from './SlugPage.module.scss';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';

const SlugPage = (props) => {
  const { article, user, deleteSlug } = props;
  const [dell, setDell] = useState(false);

  let username = '';
  if (user) username = user.username;
  console.log(props);
  const date = format(new Date(article.createdAt), 'MMMM,dd,yyyy');
  return (
    <div className={style.page}>
      <div className={style.heder}>
        <div className={style.title}>{article.title}</div>
        <div className={style.user}>
          <div className={style.name_time}>
            <div>{article.author.username}</div>
            <div>{date}</div>
          </div>
          <div className={style.avatar}>
            <img src={article.author.image} alt="" />
          </div>
        </div>
      </div>
      <div className={style.desBody}>
        <div className={style.description}>{article.description}</div>
        {article.author.username === username ? (
          <div className={style.edit}>
            <span
              onClick={() => {
                console.log(dell);
                setDell(true);
              }}
            >
              Delete
              {dell ? (
                <span
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                  className={style.modal}
                >
                  <div></div>
                  <div> Are tou sure to delete this article?</div>
                  <span
                    onClick={() => {
                      setDell(false);
                    }}
                  >
                    No
                  </span>
                  <span
                    onClick={() => {
                      setDell(false);
                      deleteSlug(article.slug, user.token);
                    }}
                  >
                    Yes
                  </span>
                </span>
              ) : null}
            </span>
            <span
              onClick={() => {
                console.log('edt');
              }}
            >
              Edit
            </span>
          </div>
        ) : null}
      </div>
      <div className={style.body}>
        <ReactMarkdown>{article.body}</ReactMarkdown>
      </div>
    </div>
  );
};

export default SlugPage;
