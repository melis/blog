const initialState = { articles: [], loading: false, total: null, page: 1 };

const articles = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ARTICLES":
      return { ...state, articles: action.articles, total: action.total };
    case "SET_LOADING":
      return { ...state, loading: action.loading };
    case "SET_PAGE":
      return { ...state, page: action.page };
    default:
      return state;
  }
};

export default articles;
