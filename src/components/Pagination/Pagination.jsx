import React from 'react';
import { Pagination } from 'antd';
import style from './Pagination.module.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/articlesActions';

const Pagin = (props) => {
  const { page, total, setArticles, token } = props;

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
          setArticles(val, token);
        }}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    page: state.articles.page,
    total: state.articles.total,
    token: state.user.user ? state.user.user.token : '',
  };
};

export default connect(mapStateToProps, actions)(Pagin);
