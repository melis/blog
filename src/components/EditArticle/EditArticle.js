import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './EditArticle.module.scss';
import * as actions from '../../store/slugActions';
import ArticleForm from '../EditArticleForm/EditArticleForm';
import { withRouter } from 'react-router-dom';

const EditArticle = (props) => {
  const { user, match, setSlug, updSlug, slug } = props;
  const { slugName } = match.params;
  console.log(user, slug);

  useEffect(() => {
    setSlug(slugName, user.token);
  }, [slugName]);

  return (
    <div className={style.article}>
      <h1>Edit article</h1>
      {slug && slug.author.username === user.username ? (
        <ArticleForm token={user.token} submit={updSlug} slug={slug} />
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    slug: state.slug.slug,
  };
};
EditArticle.propTypes = {
  user: PropTypes.object,
  match: PropTypes.object,
  setSlug: PropTypes.func,
  updSlug: PropTypes.func,
  slug: PropTypes.object,
};
export default withRouter(connect(mapStateToProps, actions)(EditArticle));
