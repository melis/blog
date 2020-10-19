import blogApi from '../api/api';

export const setUser = (userDate) => {
  return (dispatch) => {
    dispatch({ type: 'SET_USER_LOADING', loading: true });
    blogApi.signIn(userDate).then((a) => {
      if (a.error) {
        dispatch({ type: 'SET_USER_ERROR', error: a.error });
      } else {
        dispatch({
          type: 'SET_USER',
          user: a.user,
        });
      }
    });
  };
};

export const logOut = () => {
  window.localStorage.clear();
  return { type: 'LOG_OUT' };
};
