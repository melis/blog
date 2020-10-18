import React from "react";
import style from "./SlugPage.module.scss";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";

const SlugPage = (props) => {
  const { article } = props;

  const date = format(new Date(article.createdAt), "MMMM,dd,yyyy");
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
      <div className={style.body}>
        <ReactMarkdown>{article.body}</ReactMarkdown>
      </div>
    </div>
  );
};

export default SlugPage;
