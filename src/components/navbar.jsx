import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img
              src="src/assets/images/logo-snap.png"
              alt="logo-png"
              width={"55px"}
            />
            <img
              src="src/assets/images/flicken-txt.jpg"
              alt="logo-jpgg"
              width={"170px"}
            />
          </div>
          <div className="col-lg-8">
            <ul className="nav nav-tabs" id="navId" role="tablist">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Services" className="nav-link">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
