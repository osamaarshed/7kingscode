import React from "react";
import "../App.css";
import logo1 from "../Images/7kctransparent.svg";
// import logo from "../Images/7kclogo2.jpg";
function Navbar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              src={logo1}
              alt=""
              width="350"
              height="70"
              className="d-inline-block align-text-top mx-4 img-fluid navlogo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbarbuttons navbar-content"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Career
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
