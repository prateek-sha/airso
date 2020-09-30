import React from "react";
import { Button } from "./Button";
import "./Pricing.css";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div id="price" className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Choose Your Plan</h1>
          <div className="pricing__container">
            <Link to="/sign-up" className="pricing__container-card">
              <Flip right>
                <div className="pricing__container-cardInfo">
                  {/* <div className="icon">
                  <FaFire color="black" />
                </div> */}
                  <div className="color-info pitch">
                    <h3>Starter</h3>
                    <h4>$8.99</h4>
                    <p>per month</p>
                  </div>
                  <div className="triangle-down "></div>
                  <ul className="pricing__container-features">
                    <li>100 Transactions</li>
                    <li>2% Cash Back</li>
                    <li>$10,000 Limit</li>
                  </ul>
                  <Button buttonStyle="btn--outline">Choose Plan</Button>
                </div>
              </Flip>
            </Link>

            <Link to="/sign-up" className="pricing__container-card">
              <Flip right>
                <div className="pricing__container-cardInfo">
                  {/* <div className="icon">
                  <BsXDiamondFill color="black" />
                </div> */}
                  <div className="color-info darkblue">
                    <h3>Gold</h3>
                    <h4>$29.99</h4>
                    <p>per month</p>
                  </div>
                  <div className="triangle-down-blue "></div>

                  <ul className="pricing__container-features">
                    <li>1000 Transactions</li>
                    <li>3.5% Cash Back</li>
                    <li>$100,000 Limit</li>
                  </ul>
                  <Button buttonStyle="btn--outline">Choose Plan</Button>
                </div>
              </Flip>
            </Link>
            <Link to="/sign-up" className="pricing__container-card">
              <Flip right>
                <div className="pricing__container-cardInfo">
                  {/* <div className="icon">
                  <GiCrystalize color="#f00946" />
                </div> */}
                  <div className="color-info cyan">
                    <h3>Diamond</h3>
                    <h4>$99.99</h4>
                    <p>per month</p>
                  </div>
                  <div className="triangle-down-cyan "></div>

                  <ul className="pricing__container-features">
                    <li>Unlimited Transactions</li>
                    <li>5% Cash Back</li>
                    <li>Unlimited Spending</li>
                  </ul>
                  <Button buttonStyle="btn--outline">Choose Plan</Button>
                </div>
              </Flip>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
