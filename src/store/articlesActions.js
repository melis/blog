import blogApi from "../api/api";

export const setArticles = (page = 0) => {
  return (dispatch) => {
    dispatch({ type: "SET_OFFSET", offset: page });
    dispatch({ type: "SET_LOADING", loading: true });
    blogApi.getArticles(page).then((a) => {
      dispatch({ type: "SET_LOADING", loading: false });
      dispatch({
        type: "SET_ARTICLES",
        articles: a.articles,
        total: a.articlesCount,
      });
    });
  };
};
