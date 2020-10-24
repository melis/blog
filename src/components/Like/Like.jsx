import React from 'react';
import { Tag, Statistic } from 'antd';
import { HeartOutlined, HeartTwoTone } from '@ant-design/icons';

const Like = (props) => {
  console.log(props);
  const { article } = props;
  return (
    <Statistic
      value={article.favoritesCount}
      prefix={article.favorited ? <HeartTwoTone /> : <HeartOutlined />}
    />
  );
};
export default Like;
