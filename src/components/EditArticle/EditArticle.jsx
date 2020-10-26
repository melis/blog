import React, { useEffect } from 'react';
import style from './EditArticle.module.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/slugActions';
import ArticleForm from '../EditArticleForm/EditArticleForm';

const EditArticle = (props) => {
  const { user, match, setSlug, updSlug, slug } = props;
  const { slugName } = match.params;

  useEffect(() => {
    setSlug(slugName, user.token);
  }, [slugName]);

  return (
    <div className={style.article}>
      <h1>Edit article</h1>
      <ArticleForm token={user.token} submit={updSlug} slug={slug} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    slug: state.slug.slug,
  };
};
export default connect(mapStateToProps, actions)(EditArticle);
