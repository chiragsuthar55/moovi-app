import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignIn = () => {
  return (
    <div className="signin d-flex justify-content-center align-items-center">
      <div className="signin-container py-5">
        <div>
          <h1 className="signin-logo">
            M
            <FontAwesomeIcon icon={faCompactDisc} />
            <FontAwesomeIcon icon={faCompactDisc} />
            vi
          </h1>
        </div>
        <form className="form">
          <div className="form-group mt-5">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email
              <br /> with anyone else.
            </small>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn mt-5 m-auto px-5 py-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
