import React from "react";

function DefinitionsBullets(props) {
  return (
    <>
      <div className="container">
        <div className="row definitions">
          <div className="col-md-6 col-sm-12">
            <img className="img-fluid" alt="" src={props.image} />
          </div>
          <div className="col-md-6 col-sm-12 definitionsBullets-text">
            <h1 className="definitions-heading">{props.heading}</h1>
            <p className="definitions-description">{props.description}</p>
            <ul className="definitions-description">
              <li>{props.bullet1}</li>
              <li>{props.bullet2}</li>
              <li>{props.bullet3}</li>
              <li>{props.bullet4}</li>
              <li>{props.bullet5}</li>
              <li>{props.bullet6}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DefinitionsBullets;
