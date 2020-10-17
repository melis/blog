import React from "react";
import style from "./SlugPage.module.scss";

const SlugPage = (props) => {
  const { article } = props;

  if (article) {
    return (
      <div>
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
      </div>
    );
  }

  return null;
};

export default SlugPage;
