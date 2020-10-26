import React from 'react';
import { Pagination } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './Pagination.module.scss';
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
Pagin.propTypes = {
  page: PropTypes.number,
  total: PropTypes.number,
  setArticles: PropTypes.func,
  token: PropTypes.string,
};
export default connect(mapStateToProps, actions)(Pagin);
