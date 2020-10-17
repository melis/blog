import React from "react";
import style from "./SlugPage.module.scss";
import { format } from "date-fns";

const SlugPage = (props) => {
  const { article } = props;
  const date = format(new Date(2020 - 10 - 16), "MM/dd/yyyy");

if (article) {  return (
  <div className={style.page}>
    <div className={style.heder}>
      <div className={style.title}>{article.title}</div>
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
                : "https://static.productionready.io/images/smiley-cyrus.jpg"
            }
            alt=""
          />
        </div>
      </div>
    </div>
    <div className={style.body}>{article.body}</div>
  </div>
);}
 return <div>1</div>
  
  

};

export default SlugPage;
