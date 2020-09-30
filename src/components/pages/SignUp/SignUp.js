import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "./SignUp.css";

function SignUp() {
  return (
    <>
      <div className="main">
        <div className="nav-as">
          <Link to="/" className="navbar-logo-as">
            <Fade left>
              <p>AIRSO</p>
            </Fade>
          </Link>
        </div>
        <div className="wrapper"></div>
        <Fade right cascade>
          <div className="flex">
            <h1>Sign Up</h1>
            <div className="flex-left">
              <label>Email</label>
              <input type="text" />
            </div>
            <div className="flex-left">
              <label>Password</label>
              <input type="password" />
            </div>
            <button>Submit</button>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default SignUp;
