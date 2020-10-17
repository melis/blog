import blogApi from "../api/api";

export const setSlug = (slugName) => {
  return (dispatch) => {
    dispatch({ type: "SET_SLUG_LOADING", loading: true });
    blogApi.getSlug(slugName).then((a) => {
      dispatch({
        type: "SET_SLUG",
        slug: a.article,
      });
      dispatch({ type: "SET_SLUG_LOADING", loading: false });
    });
  };
};
