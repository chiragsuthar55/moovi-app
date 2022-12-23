const Footer = () => {
  return (
    <div
      id="about"
      className="footer text-center text-secondary d-flex flex-column justify-content-center align-items-center"
    >
      <div className="mt-5 secondary">
        <p>Question? Email : chiragsuthar.codezee@gmail.com</p>
      </div>
      <div className="container-fluid mt-3">
        <div className="row justify-content-center">
          <div className="col-sm-3">site</div>
          <div className="col-sm-3">about us</div>
          <div className="col-sm-3">subsribe</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-3">more</div>
          <div className="col-sm-3">feedback</div>
          <div className="col-sm-3">donate</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-3">speed test</div>
          <div className="col-sm-3">privacy</div>
          <div className="col-sm-3">jobs</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-3">privacy</div>
          <div className="col-sm-3">privacy</div>
          <div className="col-sm-3">help center</div>
        </div>
      </div>
      <div className="mt-4">
        <p>Copyright @ 2020-2022 India</p>
        <p>
          Created by{" "}
          <span className="chirag">
            <a href="https://codepen.io/coding_star">chirag</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
