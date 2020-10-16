import React from "react";
import style from "./Article.module.scss";
import { format } from "date-fns";
import ReactMarkdown from 'react-markdown'

const Article = (props) => {
  console.log(props);
  const { article } = props;
  // const input = '# This is a header\n\nAnd this is a paragraph'

  const date = format(new Date(2020-10-16), "MM/dd/yyyy");
  return (
    <div className={style.article}>
      <div className={style.heder}>
        <div className={style.title}>{article.title}</div>
        <div className={style.user}>
          <div className={style.name_time}>
            <div>{article.author.username}</div>
            <div>{date}</div>
          </div>
          <div className={style.avatar}>
            <img src={article.author.image?  article.author.image: 'https://static.productionready.io/images/smiley-cyrus.jpg'} alt="" />
          </div>
        </div>
      </div>
      <div className={style.body}>{article.body}</div>
      {/* <ReactMarkdown  source={input } /> */}
    </div>
  );
};
export default Article;
