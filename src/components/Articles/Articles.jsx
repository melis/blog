import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/articleActions";
import listCreator from "./listCreator";

const Articles = (props) => {
  const { articles } = props;

  const list = listCreator(articles);
  return <div>{list}</div>;
};
const mapStateToProps = (state) => {
  return {
    articles: state.articles.articles,
  };
};
export default connect(mapStateToProps)(Articles);
