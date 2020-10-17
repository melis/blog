import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/slugActions";
import Spinner from "../Spinner/Spinner";
import SlugPage from "./SlugPage";

const Slug = (props) => {
  const { match, setSlug, slug, loading } = props;
  const { slugName } = match.params;

  useEffect(() => {
    setSlug(slugName);
  }, [slugName]);

  if (loading) {
    return <Spinner />;
  }
  return <SlugPage article={slug} />;
};

const mapStateToProps = (state) => {
  return {
    slug: state.slug.slug,
    loading: state.slug.loading,
  };
};
export default connect(mapStateToProps, actions)(Slug);
