import { SET_MOVIES_LIST } from "../actions";

const initialState = {
  moviesList: [],
  loading: false,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES_LIST:
      return {
        ...state,
        moviesList: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
