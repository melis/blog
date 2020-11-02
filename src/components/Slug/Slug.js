import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Result } from 'antd';
import PropTypes from 'prop-types';
import * as actions from '../../store/slug/slugActions';
import Spinner from '../Spinner/Spinner';
import SlugPage from './SlugPage';

const Slug = (props) => {
  const { match, setSlug, slug, loading, error, user, deleteSlug, token } = props;
  const { slugName } = match.params;

  useEffect(() => {
    setSlug(slugName, token);
  }, [slugName]);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Result status="warning" title={error} />;
  }
  return <SlugPage article={slug} user={user} deleteSlug={deleteSlug} token={token} />;
};

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    slug: state.slug.slug,
    loading: state.slug.loading,
    error: state.slug.error,
    token: state.user.user ? state.user.user.token : '',
  };
};
Slug.propTypes = {
  match: PropTypes.object,
  setSlug: PropTypes.func,
  slug: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.string,
  user: PropTypes.object,
  deleteSlug: PropTypes.func,
  token: PropTypes.string,
};
export default connect(mapStateToProps, actions)(Slug);
