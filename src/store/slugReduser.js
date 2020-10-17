const initialState = { slug: null, loading: false };

const slug = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SLUG":
      return { ...state, slug: action.slug };
    case "SET_SLUG_LOADING":
      return { ...state, loading: action.loading };
    default:
      return state;
  }
};

export default slug;
