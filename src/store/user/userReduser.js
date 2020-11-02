const initialState = { user: null, loading: true, error: null };

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user, error: null, loading: false };
    case 'SET_USER_LOADING':
      return { ...state, loading: action.loading };
    case 'SET_USER_ERROR':
      return { ...state, error: action.error, loading: false };
    case 'LOG_OUT':
      return { ...state, user: null, error: null, loading: true };
    default:
      return state;
  }
};

export default user;
