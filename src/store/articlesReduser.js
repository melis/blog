const initialState = { articles: [], loading: false, total: null, offset: 0 };

const articles = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ARTICLES":
      return { ...state, articles: action.articles, total: action.total };
    case "SET_LOADING":
      return { ...state, loading: action.loading };
    case "SET_OFFSET":
      return { ...state, offset: action.offset };
    default:
      return state;
  }
};

export default articles;
