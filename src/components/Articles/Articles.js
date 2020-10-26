import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import listCreator from './listCreator';

const Articles = (props) => {
  const { articles } = props;

  const list = listCreator(articles);
  return <div>{list}</div>;
};
const mapStateToProps = (state) => {
  return {
    articles: state.articles.articles,
  };
};
Articles.propTypes = {
  articles: PropTypes.array,
};
export default connect(mapStateToProps)(Articles);
