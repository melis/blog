export const setArticles = (articles, total) => {
  return (dispatch) => {
    dispatch({
      type: "SET_ARTICLES",
      articles,
      total,
    });
  };
};

export const setArticleLoading = (loading) => {
  return { type: "SET_LOADING", loading };
};

export const setArticleTotal = (total) => {
  return { type: "SET_TOTAL", total };
};

export const setArticleOffset = (offset) => {
  return { type: "SET_OFFSET", offset };
};
