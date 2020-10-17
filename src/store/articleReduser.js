const initialState = { article: null, loading: false };

const article = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ARTICLE_ONE":
      return { ...state, article: action.article };
    case "SET_LOADING_ONE":
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

export default article;
