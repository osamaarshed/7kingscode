import React from "react";
import "../App.css";

function MiddleText(props) {
  return (
    <>
      <div className="container">
        <h1 className="home-mid-text">{props.text}</h1>
      </div>
    </>
  );
}

export default MiddleText;
