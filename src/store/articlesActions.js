import blogApi from "../api/api";

export const setArticles = (page) => {
  return (dispatch) => {
    dispatch({ type: "SET_LOADING", loading: true });
    blogApi.getArticles(page).then((a) => {
      if (a.error) {
        dispatch({ type: "SET_ERROR", error: a.error });
      } else {
        dispatch({
          type: "SET_ARTICLES",
          articles: a.articles,
          total: a.articlesCount,
          page,
        });
      }
    });
  };
};
