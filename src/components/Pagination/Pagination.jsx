import React from "react";
import { Pagination } from "antd";
import style from "./Pagination.module.scss";
const Pagin = (props) => {
  const { page = 1, total = 1000 } = props;
  console.log(total);
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
          console.log(val);
        }}
      />
    </div>
  );
};

export default Pagin;
