import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import blogApi from "../../api/api";
import Heder from "../Heder/Heder";
import Pagin from "../Pagination/Pagination";

const App = () => {
  useEffect(() => {
    blogApi.getArticles().then((a) => {
      console.log(a);
    });
  });
  return (
    <div className={styles.app}>
      <Heder />
      <Pagin />
    </div>
  );
};
export default App;
