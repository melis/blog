import React from "react";
import style from "./Article.module.scss";
const Article = (props) => {
  console.log(props);
  const { article } = props;
  return (
    <div className={style.article}>
      {article.author.username} {article.slug}
    </div>
  );
};
export default Article;
