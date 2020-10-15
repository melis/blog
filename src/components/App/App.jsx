import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import blogApi from "../../api/api";
import Heder from "../Heder/Heder";
import Content from "../Content/Content";

const App = () => {
  return (
    <div className={styles.app}>
      <Heder />
      <Content />
    </div>
  );
};
export default App;
