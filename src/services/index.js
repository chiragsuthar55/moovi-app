import axios from "axios";
import { setMoviesList } from "../actions/actions";

export const getMoviesData = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "http://www.omdbapi.com/?s=star wars&apikey=822fc89d"
    );
    const data = response.data;
    dispatch(setMoviesList(data));
  } catch (error) {
    console.log("error", error);
  }
};
