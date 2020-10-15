import React from "react";

const Article = (props) => {
  console.log(props);
  const { article } = props;
  return <div>{article.slug}</div>;
};
export default Article;
