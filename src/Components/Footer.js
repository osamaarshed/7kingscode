import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <>
      <div className="container-fluid">
        <div className="row text-white footer-row">
          <div className="col-md-4 col-sm-12">
            <h1 className="footer-heading">7 KINGS CODE</h1>
            <p className="footer-paragraph">
              An Award-winning South Florida IT Solutions and Services Company
              delivering exceptional services
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h1 className="footer-heading">OUR LOCATIONS</h1>
            <h2 className="footer-heading2">Global Head Office: </h2>
            <p className="footer-paragraph">
              1401 N University Dr.#503 Coral Springs, FL 33071
            </p>
            <h2 className="footer-heading2">Asian Regional Head Office:</h2>
            <p className="footer-paragraph">Hyderabad, Telangana, India</p>
            <h2 className="footer-heading2">Europe Regional Head Office:</h2>
            <p className="footer-paragraph">Milano, Italy</p>
            <h2 className="footer-heading2">
              South Asian & Middle East Head Office:
            </h2>
            <p className="footer-paragraph">Lahore, Pakistan</p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h1 className="footer-heading">OFFICE HOURS</h1>
            <p className="footer-paragraph">Mon-Fri: 09:00am-06:00pm EST</p>
            <h1 className="footer-heading">CONTACT US</h1>
            <p className="footer-paragraph">
              +1 954-272-8515 <br />
              info@7kingscode.com
            </p>
            <h1 className="footer-heading">CONNECT WITH US</h1>
            <div className="container">
              <div className="row">
                <div className="col-md-2">
                  <FaFacebook className="footer-fb" />
                </div>
                <div className="col-md-2">
                  <AiFillTwitterCircle className="footer-tw" />
                </div>

                <div className="col-md-2">
                  <BsLinkedin className="footer-ln" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
