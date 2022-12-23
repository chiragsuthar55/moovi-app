import { useSelector } from "react-redux";
import Card from "./Card";

const CardBanner = () => {
  const moviesSelecter = useSelector((state) => state.movies);
  const { moviesList = [] } = moviesSelecter;

  return (
    <div className="card-banner" id="movies">
      <div className="m-5 text-center">
        <h2 className="card-title display-6 mt-5">
          Choose your Favourite Shows and Watch <br />
          with No Disturbance
        </h2>
      </div>
      <div className="cardlist m-5">
        {moviesList?.Search?.length > 0 &&
          moviesList.Search.map((m, i) => {
            return (
              <Card
                key={i}
                id={m.imdbID}
                title={m.Title}
                image={m.Poster}
                yr={m.year}
              />
            );
          })}
      </div>
    </div>
  );
};

export default CardBanner;
