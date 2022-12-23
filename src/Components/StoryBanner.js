import Tv from "../assets/Tv.png";

const StoryBanner = () => {
  return (
    <div className="story-banner m-5 d-flex align-items-center">
      <div className="d-flex align-items-center container">
        <div className="text-center">
          <p className="display-4">Enjoy on your TV.</p>
          <h3>Enjoy your favourite movies, series.</h3>
          <h5 className="md pt-3">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h5>
        </div>
        <div className="tv-container text-center">
          <img src={Tv} alt="Story Banner" className="w-50" />
        </div>
      </div>
    </div>
  );
};

export default StoryBanner;
