import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Scrollchor from "react-scrollchor";
import Fade from "react-reveal/Fade";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <Fade left>AIRSO</Fade>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes color="black" /> : <FaBars color="black" />}
            </div>
          </div>
          <div className="navbar-container container">
            <div>
              <Fade top cascade>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item" onClick={closeMobileMenu}>
                    <Scrollchor className="nav-links" to="#sec1">
                      Home
                    </Scrollchor>
                  </li>
                  <li className="nav-item" onClick={closeMobileMenu}>
                    <Scrollchor className="nav-links" to="#sec2">
                      About
                    </Scrollchor>
                  </li>
                  <li className="nav-item" onClick={closeMobileMenu}>
                    <Scrollchor className="nav-links" to="#sec3">
                      Services
                    </Scrollchor>
                  </li>
                  <li className="nav-item" onClick={closeMobileMenu}>
                    <Scrollchor className="nav-links" to="#price">
                      Pricing
                    </Scrollchor>
                  </li>
                  {button ? (
                    ""
                  ) : (
                    <li className="nav-item" onClick={closeMobileMenu}>
                      <Scrollchor className="nav-links sign-up" to="#sec3">
                        SIGN UP
                      </Scrollchor>
                    </li>
                  )}
                </ul>
              </Fade>
            </div>
          </div>
          <Fade right>
            <div>
              {button ? (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline">SIGN UP</Button>
                </Link>
              ) : (
                ""
              )}
            </div>
          </Fade>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
