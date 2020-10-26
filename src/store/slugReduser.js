const initialState = { slug: null, loading: true, error: '' };

const slug = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SLUG':
      return { ...state, slug: action.slug, error: null, loading: false };
    case 'SET_SLUG_LOADING':
      return { ...state, loading: action.loading };
    case 'SET_SLUG_ERROR':
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default slug;
