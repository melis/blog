import React, { useState } from 'react';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { Tag } from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Like from '../Like/Like';
import style from './SlugPage.module.scss';

const SlugPage = (props) => {
  const { article, user, deleteSlug, history } = props;
  const [dell, setDell] = useState(false);

  let username = '';
  if (user) username = user.username;

  const date = article ? format(new Date(article.createdAt), 'MMMM,dd,yyyy') : null;

  const taglist = [...article.tagList].map((tag) => {
    return <Tag key={tag}>{tag}</Tag>;
  });

  return (
    <div className={style.page}>
      <div className={style.heder}>
        <div className={style.hederLeftSide}>
          <div className={style.titleAndLike}>
            <div className={style.title} to={`articles/${article.slug}`}>
              {article.title}
            </div>
            <Like article={article} />
          </div>
          <div>{taglist}</div>
        </div>
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
              onKeyDown={() => {
                setDell(true);
              }}
              role="button"
              tabIndex={0}
              onClick={() => {
                setDell(true);
              }}
            >
              Delete
              {dell ? (
                <span
                  onKeyDown={(event) => {
                    event.stopPropagation();
                  }}
                  role="button"
                  tabIndex={0}
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                  className={style.modal}
                >
                  <div />
                  <div className={style.dellTittle}>
                    <span>!</span> <span>Are tou sure to delete this article</span>?
                  </div>
                  <span
                    onKeyDown={() => {
                      setDell(false);
                    }}
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      setDell(false);
                    }}
                  >
                    No
                  </span>
                  <span
                    onKeyDown={() => {
                      setDell(false);
                      deleteSlug(article.slug, user.token);
                    }}
                    role="button"
                    tabIndex={0}
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
              onKeyDown={() => {
                history.push(`/articles/${article.slug}/edit`);
              }}
              role="button"
              tabIndex={0}
              onClick={() => {
                history.push(`/articles/${article.slug}/edit`);
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
SlugPage.propTypes = {
  article: PropTypes.object,
  user: PropTypes.object,
  deleteSlug: PropTypes.func,
  history: PropTypes.object,
};
export default withRouter(SlugPage);
