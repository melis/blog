import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import style from "./Pagination.module.scss";
import { connect } from "react-redux";
import * as actions from "../../store/articleActions";
import blogApi from "../../api/api";

const Pagin = (props) => {
  const { page, total } = props;
  const {
    setArticleOffset,
    setArticleLoading,
    setArticles,
    setArticleTotal,
  } = props;

  return (
    <div className={style.pagination}>
      <Pagination
        size="small"
        current={page}
        total={total}
        showQuickJumper
        defaultPageSize={5}
        showSizeChanger={false}
        onChange={(val) => {
          setArticleOffset(val - 1);
          setArticleLoading(true);
          blogApi.getArticles(val - 1).then((a) => {
            setArticleLoading(false);
            setArticleTotal(a.articlesCount);
            setArticles(a.articles);
          });
        }}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    page: state.articles.offset + 1,
    total: state.articles.total,
  };
};

export default connect(mapStateToProps, actions)(Pagin);
