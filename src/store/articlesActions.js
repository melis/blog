import blogApi from "../api/api";

export const setArticles = (page) => {
  return (dispatch) => {
    dispatch({ type: "SET_LOADING", loading: true });
    blogApi.getArticles(page).then((a) => {
      dispatch({
        type: "SET_ARTICLES",
        articles: a.articles,
        total: a.articlesCount,
      });
      dispatch({ type: "SET_PAGE", page: page });
      dispatch({ type: "SET_LOADING", loading: false });
    });
  };
};
