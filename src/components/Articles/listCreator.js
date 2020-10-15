import React from "react";
import Article from "../Article/Article";

let i = 0;
const listCreator = (articles) => {
  console.log(articles);
  return articles.map((el) => {
    return <Article article={el} key={i++} />;
  });
};
export default listCreator;
