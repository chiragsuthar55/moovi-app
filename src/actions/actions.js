import { SET_MOVIES_LIST } from ".";

/*
 * @desc  Set Movies List
 */
export const setMoviesList = (payload) => {
  return {
    type: SET_MOVIES_LIST,
    payload,
  };
};
