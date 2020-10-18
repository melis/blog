import blogApi from "../api/api";

export const setSlug = (slugName) => {
  return (dispatch) => {
    dispatch({ type: "SET_SLUG_LOADING", loading: true });
    blogApi.getSlug(slugName).then((a) => {
      if (a.error) {
        dispatch({ type: "SET_SLUG_ERROR", error: a.error });
      } else {
        dispatch({
          type: "SET_SLUG",
          slug: a.article,
        });
      }
    });
  };
};
