import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-desc w-75 text-center">
        <p className="display-5">Unlimited movies, Tv shows and more.</p>

        <h4>Watch anytime,Cancel Anytime</h4>
        <h5 className="md pt-3">
          Ready to watch? Enter your email to create or restart your membership.
        </h5>
        <div className="banner-form">
          <form className="pt-3">
            <input
              type="email"
              className="form-control w-50 d-inline py-3 px-4"
              placeholder="Email address"
            />
            <button className="btn mx-2 px-4 py-3 display-1">
              <Link to="/signin" className="text-white">
                Get started
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
