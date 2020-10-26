import { Spin } from 'antd';
import React from 'react';
import style from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={style.example}>
      <Spin />
    </div>
  );
};
export default Spinner;
