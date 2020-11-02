import blogApi from '../../api/api';

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

export const createUser = (newUser) => {
  const user = {
    email: newUser.email,
    username: newUser.username,
    password: newUser.password_1,
  };
  return (dispatch) => {
    dispatch({ type: 'SET_USER_LOADING', loading: true });
    blogApi.createAccaunt(user).then((a) => {
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

export const updUser = (user, token) => {
  return (dispatch) => {
    dispatch({ type: 'SET_USER_LOADING', loading: true });
    blogApi.updUser(user, token).then((a) => {
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

export const resetError = () => {
  return { type: 'SET_USER_ERROR', error: null };
};
export const logOut = () => {
  window.localStorage.clear();
  return { type: 'LOG_OUT' };
};
