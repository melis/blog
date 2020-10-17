import React, { useEffect } from "react";
import Pagin from "../Pagination/Pagination";
import Articles from "../Articles/Articles";
import style from "./Content.module.scss";
import Spinner from "../Spinner/Spinner";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/articlesActions";
import blogApi from "../../api/api";

const Content = (props) => {
  const { loading, setArticleLoading, setArticles, setArticleTotal } = props;

  useEffect(() => {
    setArticleLoading(true);
    blogApi.getArticles().then((a) => {
      setArticleLoading(false);
      setArticles(a.articles, a.articlesCount);
    });
  }, []);

  if (loading) return <Spinner />;

  return (
    <div className={style.content}>
      <Articles />
      <Pagin />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.articles.loading,
  };
};

export default connect(mapStateToProps, actions)(Content);
