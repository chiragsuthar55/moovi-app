import {
  faCompactDisc,
  faCreditCard,
  faDesktop,
  faMobile,
  faTablet,
  faTv,
  faTvAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    screen: "Mobile",
    price: 149,
    quality: "Good",
    resolution: "480p",
    devices: ["Mobile", "Tablet"],
  },
  {
    screen: "Basic",
    price: 199,
    quality: "Good",
    resolution: "480p",
    devices: ["Mobile", "Tablet"],
  },
  {
    screen: "Standard",
    price: 499,
    quality: "Better",
    resolution: "480p",
    devices: ["Mobile", "Tablet", "Desktop", "Tv"],
  },
  {
    screen: "Premium",
    price: 649,
    quality: "Best",
    resolution: "480p",
    devices: ["Mobile", "Tablet", "Desktop", "Tv"],
  },
];

const Subscription = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [price, setPrice] = useState("");

  const handleSelect = (e) => {
    const plan = plans.filter((x) => {
      return x.screen === e.target.value;
    });
    setSelectedPlan(e.target.value);
    setPrice(plan[0].price);
  };

  return (
    <div className="subscription d-flex justify-content align-items-center flex-column">
      <div className="display-5 logo text-center">
        <Link className="navbar-brand" href="/">
          M
          <FontAwesomeIcon icon={faCompactDisc} />
          <FontAwesomeIcon icon={faCompactDisc} />
          vi
        </Link>
        <h5 className="pt-2">Watch anytime,Cancel Anytime</h5>
      </div>
      <div>
        <p className="display-6">Choose a plan that's right for you.</p>
      </div>
      <table className="table plans text-center table-responsive">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col" className="s-box">
              <button
                value="Mobile"
                onClick={(e) => handleSelect(e)}
                className="btn p-2 text-white"
              >
                Mobile
              </button>
            </th>
            <th scope="col" className="s-basic s-box">
              <button
                value="Basic"
                className="btn text-white p-2"
                onClick={(e) => handleSelect(e)}
              >
                Basic
              </button>
            </th>
            <th scope="col" className="s-box">
              <button
                value="Standard"
                onClick={(e) => handleSelect(e)}
                className="btn text-white p-2"
              >
                Standard
              </button>
            </th>
            <th scope="col" className="s-box">
              <button
                value="Premium"
                onClick={(e) => handleSelect(e)}
                className="btn text-white p-2"
              >
                Premium
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Monthly Price</th>
            <td>149</td>
            <td>199</td>
            <td>499</td>
            <td>649</td>
          </tr>
          <tr>
            <th scope="row">Video quality</th>
            <td>Good</td>
            <td>Good</td>
            <td>Better</td>
            <td>Best</td>
          </tr>
          <tr>
            <th scope="row">Resolution</th>
            <td>480p</td>
            <td>480p</td>
            <td>1080p</td>
            <td>4k +HDR</td>
          </tr>
          <tr>
            <th scope="row">Devices you can use to watch</th>
            <td>
              <FontAwesomeIcon icon={faMobile} />
              <div>Mobile</div>
              <FontAwesomeIcon icon={faTablet} />
              <div>Tablet</div>
            </td>
            <td>
              <FontAwesomeIcon icon={faMobile} />
              <div>Mobile</div>
              <FontAwesomeIcon icon={faTablet} />
              <div>Tablet</div>
            </td>
            <td>
              <FontAwesomeIcon icon={faMobile} />
              <div>Mobile</div>
              <FontAwesomeIcon icon={faTablet} />
              <div>Tablet</div>
              <FontAwesomeIcon icon={faDesktop} />
              <div>Desktop</div>
              <FontAwesomeIcon icon={faTvAlt} />
              <div>Tv</div>
            </td>
            <td>
              <FontAwesomeIcon icon={faMobile} />
              <div>Mobile</div>
              <FontAwesomeIcon icon={faTablet} />
              <div>Tablet</div>
              <FontAwesomeIcon icon={faDesktop} />
              <div>Desktop</div>
              <FontAwesomeIcon icon={faTv} />
              <div>Tv</div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="payment m-5">
        {selectedPlan ? (
          <div>
            <h4 className="text-white">Selected Plan : {selectedPlan}</h4>
            <p>Price : {price}</p>
          </div>
        ) : (
          ""
        )}
        <button className="btn text-white p-2">
          Payment
          <span>
            <FontAwesomeIcon icon={faCreditCard} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Subscription;
