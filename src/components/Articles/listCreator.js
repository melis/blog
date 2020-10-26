import React from 'react';
import Article from '../Article/Article';

const listCreator = (articles) => {
  let i = 0;
  return articles.map((el) => {
    return <Article article={el} key={i++} />;
  });
};
export default listCreator;
