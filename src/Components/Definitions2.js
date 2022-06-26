import React from "react";

function Definitions2(props) {
  return (
    <>
      <div className="container">
        <div className="row definitions">
          <div className="col-md-6 col-sm-12 definitions-text">
            <h1 className="definitions-heading">{props.heading}</h1>
            <p className="definitions-description">{props.description}</p>
          </div>
          <div className="col-md-6 col-sm-12">
            <img className="img-fluid" alt="" src={props.image} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Definitions2;
