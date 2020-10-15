import React from "react";
import style from "./Article.module.scss";
import { format } from "date-fns";
const Article = (props) => {
  console.log(props);
  const { article } = props;

  const date = format(new Date(2014, 1, 11), "MM/dd/yyyy");
  return (
    <div className={style.article}>
      <div className={style.heder}>
        <div className={style.title}>{article.title}</div>
        <div className={style.user}>
          <div className={style.name}>
            <div>{article.author.username}</div>
            <div>{date}</div>
          </div>
          <div className={style.avatar}>
            <img src={article.author.image} alt="" />
          </div>
        </div>
      </div>
      <div className={style.body}>{article.body}</div>
    </div>
  );
};
export default Article;
//  {article.author.username} {article.slug}
