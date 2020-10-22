import React from 'react';
import style from './Article.module.scss';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const truncate = (text) => {
  if (text.length > 185) return text.slice(0, 185) + '...';
  return text;
};

const Article = (props) => {
  const { article } = props;

  const date = format(new Date(article.createdAt), 'MMMM,dd,yyyy');
  return (
    <div className={style.article}>
      <div className={style.heder}>
        <div className={style.title}>
          <Link to={`articles/${article.slug}`}>{article.title}</Link>
        </div>
        <div className={style.user}>
          <div className={style.name_time}>
            <div>{article.author.username}</div>
            <div>{date}</div>
          </div>
          <div className={style.avatar}>
            <img
              src={
                article.author.image
                  ? article.author.image
                  : 'https://static.productionready.io/images/smiley-cyrus.jpg'
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={style.body}>{truncate(article.description)}</div>
    </div>
  );
};
export default Article;
