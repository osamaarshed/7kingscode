import React from "react";
import logo1 from "../Images/7kctransparent.svg";
import building from "../Images/7kcbuilding.jpg";

function Form() {
  return (
    <>
        <div className="container-fluid" id="contact">
          <div className="row form-background">
            <div className="col-md-6 col-sm-12 form-text">
              <img className="d-block w-50 form-midlogo" src={logo1} alt="" />
              <h2 className="form-heading">Get in touch</h2>
              <p>
                Send an inquiry and a representative from 7 Kings Code will
                contact you shortly.
              </p>
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address*</label>
                  <input
                    type="email"
                    className="form-control form-input"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password*</label>
                  <input
                    type="password"
                    className="form-control form-input"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputSubject">Subject*</label>
                  <input
                    type="subject"
                    className="form-control form-input"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter subject"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlTextarea1">Message*</label>
                  <textarea
                    className="form-control form-input"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="text-center my-4">
                  <button type="submit" className="btn btn-light ">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6 col-sm-12 form-image">
              <img className="img-fluid form-image" src={building} alt="" />
            </div>
          </div>
        </div>
    </>
  );
}

export default Form;
