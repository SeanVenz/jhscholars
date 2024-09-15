import React from "react";
import axieLoader from "../../images/23969433-b250-4c40-ad03-0fb25234cf43.gif";
import "./index.scss";

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <img src={axieLoader} alt="Loader" />
        <span></span>
      </div>
    </div>
  );
}

export default Loader;
