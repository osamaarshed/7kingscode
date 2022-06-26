import React from "react";

function Definitions(props) {
  return (
    <>
      <div className="container" id="services">
        <div className="row definitions">
          <div className="col-md-6 col-sm-12">
            <img alt="" src={props.image} className="img-fluid" />
          </div>
          <div className="col-md-6 col-sm-12 definitions-text">
            <h1 className="definitions-heading">{props.heading}</h1>
            <p className="definitions-description">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Definitions;
