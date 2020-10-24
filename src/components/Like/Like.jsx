import React, { useState } from 'react';
import { Tag, Statistic } from 'antd';
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import style from './Like.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/slugActions';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Like = (props) => {
  const { article, token, likeArticle, dezLikeArticle, history } = props;
  const [like, setLike] = useState(article.favorited);
  const [likeCount, setLikeCount] = useState(article.favoritesCount);

  return (
    <div
      onClick={() => {
        if (token) {
          if (like) {
            dezLikeArticle(article.slug, token, setLike, setLikeCount);
          } else {
            likeArticle(article.slug, token, setLike, setLikeCount);
          }
        } else {
          history.push('/sign-in');
        }
      }}
    >
      <Statistic
        valueStyle={{ fontSize: '14px', cursor: 'pointer' }}
        value={likeCount}
        prefix={like ? <HeartTwoTone twoToneColor="red" /> : <HeartOutlined />}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  const { likeArticle, dezLikeArticle } = bindActionCreators(actions, dispatch);
  return { likeArticle, dezLikeArticle };
};
const mapStateToProps = (state) => {
  return {
    token: state.user.user ? state.user.user.token : '',
  };
};

Like.propTypes = {
  token: PropTypes.string,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Like));
