import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './NewArticle.module.scss';
import * as actions from '../../store/slug/slugActions';
import ArticleForm from '../EditArticleForm/EditArticleForm';

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
NewArticle.propTypes = {
  createSlug: PropTypes.func,
  token: PropTypes.string,
};
export default connect(mapStateToProps, actions)(NewArticle);
