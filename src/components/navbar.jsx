import React from "react";
import { useNavigate } from "react-router-dom";
// import { Button, Container, Row, Col } from "react-bootstrap";
function Navbar() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img src="../assets/images/logo-snap.png" alt="logo-png" />
              <img src="../assets/images/flicken-txt.jpg" alt="logo-jpgg" />
            </div>
            <div className="col-lg-8">
              <ul class="nav nav-tabs" id="navId" role="tablist">
                <li class="nav-item">
                  <a
                    href="#tab1Id"
                    class="nav-link active"
                    data-bs-toggle="tab"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a href="#" class="nav-link" data-bs-toggle="tab">
                    About
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    href="#"
                    className="nav-link disabled"
                    data-bs-toggle="tab"
                  >
                    Contact
                  </a>
                </li>
                {/* <li className="nav-item" role="presentation">
                  {issignedUp ? (
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      onClick={handleLoggedOut}
                    >
                      Logout
                    </a>
                  ) : (
                    <a href="#" className="nav-link" data-bs-toggle="tab">
                      Login
                    </a>
                  )} 
                </li>*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
