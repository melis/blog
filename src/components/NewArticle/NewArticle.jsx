import React from 'react';
import style from './NewArticle.module.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/slugActions';
import ArticleForm from '../NewArticleForm/NewArticleForm';

const NewArticle = (props) => {
  const { createSlug, token } = props;
  return (
    <div className={style.article}>
      <h1>Create new article</h1>
      <ArticleForm submit={createSlug} token={token} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.user.user.token,
  };
};
export default connect(mapStateToProps, actions)(NewArticle);
