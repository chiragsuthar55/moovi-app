import "bootstrap/js/src/collapse.js";
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div id="questions" className="subscribe m-5 pb-5">
      <div className="m-3 text-center">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div>
        <div id="accordion" className="accordion mt-5">
          <div className="card">
            <div className="card-header" id="heading1">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse1"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  What is Moovi?
                </button>
              </h5>
            </div>

            <div
              id="collapse1"
              className="collapse show"
              aria-labelledby="heading1"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want, without a single ad – all
                for one low monthly price. There's always something new to
                discover, and new TV shows and movies are added every week!
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  How much does Netflix cost?
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Where can I watch?
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles. You can also download
                your favourite shows with the iOS, Android, or Windows 10 app.
                Use downloads to watch while you're on the go and without an
                internet connection. Take Netflix with you anywhere.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="heading4">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse4"
                  aria-expanded="false"
                  aria-controls="collapse4"
                >
                  How do I cancel?
                </button>
              </h5>
            </div>
            <div
              id="collapse4"
              className="collapse"
              aria-labelledby="heading4"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="heading5">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapse5"
                  aria-expanded="false"
                  aria-controls="collapse5"
                >
                  What can I watch on Netflix?
                </button>
              </h5>
            </div>
            <div
              id="collapse5"
              className="collapse"
              aria-labelledby="collapse5"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-form subscribe-form">
        <div className="text-center mt-5">
          <p className="subscribe-msg">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <form className="pt-3 d-flex justify-content-center align-items-center">
          <input
            type="email"
            className="form-control w-50 d-inline py-3 px-4"
            placeholder="Email Address"
          />
          <button className="btn mx-2 px-4 py-3 display-1">
            <Link to="/subscription" className="text-white">
              Get started
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
