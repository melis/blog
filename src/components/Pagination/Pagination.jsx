import React from "react";
import { Pagination } from "antd";
import style from "./Pagination.module.scss";
import { connect } from "react-redux";
import * as actions from "../../store/articlesActions";

const Pagin = (props) => {
  const { page, total } = props;
  const { setArticles } = props;

  return (
    <div className={style.pagination}>
      <Pagination
        size="small"
        showQuickJumper
        current={page}
        total={total}
        defaultPageSize={5}
        showSizeChanger={false}
        onChange={(val) => {
          setArticles(val);
        }}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    page: state.articles.page,
    total: state.articles.total,
  };
};

export default connect(mapStateToProps, actions)(Pagin);
