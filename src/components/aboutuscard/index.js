import React from "react";
import "./index.scss";
import jhlogo from "../../images/jhlogo.jpg";

function AboutUsCard({ name, role, img }) {
  return (
    <div className="aboutus_card">
      <div className="card_load">
        <img src={img} alt={name} />
      </div>
      <div className="info">
        <p>{name}</p>
        <p>{role}</p>
      </div>
    </div>
  );
}

export default AboutUsCard;
