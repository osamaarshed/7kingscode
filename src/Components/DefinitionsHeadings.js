import React from "react";

function DefinitionsHeadings(props) {
  return (
    <>
      <div className="container">
        <div className="row definitions">
          <div className="col-md-6 col-sm-12">
            <h1 className="definitionsHeadings-heading">{props.heading}</h1>
            <h3 className="subheading">
              <i>{props.subheading1}</i>
            </h3>
            <p className="definitionsHeadings-description">
              {props.description1}
            </p>
            <h3 className="subheading">
              <i>{props.subheading2}</i>
            </h3>
            <p className="definitionsHeadings-description">
              {props.description2}
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <img className="img-fluid" alt="" src={props.image} />
          </div>
        </div>
      </div>
    </>
  );
}

export default DefinitionsHeadings;
