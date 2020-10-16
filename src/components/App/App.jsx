import React from "react";
import styles from "./App.module.scss";
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
