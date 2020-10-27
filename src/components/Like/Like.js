import React, { useState } from 'react';
import { Statistic } from 'antd';
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import * as actions from '../../store/slugActions';

const Like = props => {
  const { article, token, likeArticle, dezLikeArticle, history } = props;
  const [like, setLike] = useState(article.favorited);
  const [likeCount, setLikeCount] = useState(article.favoritesCount);
  const handleClick = () => {
    if (token) {
      if (like) {
        dezLikeArticle(article.slug, token, setLike, setLikeCount);
      } else {
        likeArticle(article.slug, token, setLike, setLikeCount);
      }
    } else {
      history.push('/sign-in');
    }
  };

  return (
    <div onClick={handleClick} onKeyDown={handleClick} role="button">
      <Statistic
        valueStyle={{ fontSize: '14px', cursor: 'pointer' }}
        value={likeCount}
        prefix={like ? <HeartTwoTone twoToneColor="red" /> : <HeartOutlined />}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  const { likeArticle, dezLikeArticle } = bindActionCreators(actions, dispatch);
  return { likeArticle, dezLikeArticle };
};
const mapStateToProps = state => {
  return {
    token: state.user.user ? state.user.user.token : '',
  };
};

Like.propTypes = {
  token: PropTypes.string,
  article: PropTypes.object,
  likeArticle: PropTypes.func,
  dezLikeArticle: PropTypes.func,
  history: PropTypes.object,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Like));
