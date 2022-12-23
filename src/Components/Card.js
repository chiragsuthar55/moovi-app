import { Link } from "react-router-dom";

const Card = ({ image, yr, id, title }) => {
  return (
    <div className="cardtile m-3">
      <Link className="cardtile">
        <img src={image} alt="movie" />
      </Link>
    </div>
  );
};

export default Card;
