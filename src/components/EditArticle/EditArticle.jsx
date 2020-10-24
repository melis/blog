import React, { useState, useEffect } from 'react';
import style from './EditArticle.module.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/slugActions';
import ArticleForm from '../ArticleForm/ArticleForm';

const EditArticle = (props) => {
  const { token, match, setSlug, updSlug, slug } = props;
  const { slugName } = match.params;

  useEffect(() => {
    setSlug(slugName, token);
  }, [slugName]);

  return (
    <div className={style.article}>
      <h1>Edit article</h1>
      <ArticleForm token={token} submit={updSlug} slug={slug} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    token: state.user.user.token,
    slug: state.slug.slug,
  };
};
export default connect(mapStateToProps, actions)(EditArticle);
