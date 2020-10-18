const initialState = { user: null, loading: true, error: null };

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user, error: null, loading: false };
    case "SET_USER_LOADING":
      return { ...state, loading: action.loading };
    case "SET_USER_ERROR":
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default user;
