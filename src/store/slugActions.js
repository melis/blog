import blogApi from '../api/api';

export const setSlug = (slugName, token) => {
  return (dispatch) => {
    dispatch({ type: 'SET_SLUG_LOADING', loading: true });
    blogApi.getSlug(slugName, token).then((a) => {
      console.log(a);
      if (a.error) {
        dispatch({ type: 'SET_SLUG_ERROR', error: a.error });
      } else {
        dispatch({
          type: 'SET_SLUG',
          slug: a.article,
        });
      }
    });
  };
};

export const createSlug = (article, token, history) => {
  return (dispatch) => {
    dispatch({ type: 'SET_SLUG_LOADING', loading: true });
    blogApi.createArticle(article, token).then((a) => {
      if (a.error) {
        dispatch({ type: 'SET_SLUG_ERROR', error: a.error });
      } else {
        dispatch({
          type: 'SET_SLUG',
          slug: a.article,
        });
        history.push(`/articles/${a.article.slug}`);
      }
    });
  };
};

export const deleteSlug = (slug, token) => {
  return (dispatch) => {
    blogApi.deleteArticle(slug, token).then((a) => {
      dispatch({ type: 'SET_SLUG_ERROR', error: a.error });
    });
  };
};

export const updSlug = (slug, token, history, slugName) => {
  return (dispatch) => {
    blogApi.updateArticle(slug, token, slugName).then((a) => {
      if (a.error) {
        dispatch({ type: 'SET_SLUG_ERROR', error: a.error });
        history.push(`/articles/${slugName}`);
      } else {
        dispatch({
          type: 'SET_SLUG',
          slug: a.article,
        });
        history.push(`/articles/${a.article.slug}`);
      }
    });
  };
};

export const likeArticle = (slug, token, setLike, setLikeCount) => {
  return (dispatch) => {
    blogApi.favoriteArticle(slug, token).then((a) => {
      setLike(true);
      setLikeCount(a.article.favoritesCount);
    });
  };
};

export const dezLikeArticle = (slug, token, setLike, setLikeCount) => {
  return (dispatch) => {
    blogApi.unFavoriteArticle(slug, token).then((a) => {
      setLike(false);
      setLikeCount(a.article.favoritesCount);
    });
  };
};
