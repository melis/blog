const initialState = {
  articles: [],
  loading: true,
  total: null,
  page: 1,
  error: null,
};

const articles = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ARTICLES':
      return {
        ...state,
        articles: action.articles,
        total: action.total,
        loading: false,
        error: null,
        page: action.page,
      };
    case 'SET_LOADING':
      return { ...state, loading: action.loading };
    case 'SET_ERROR':
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default articles;
