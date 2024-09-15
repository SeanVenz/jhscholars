import React from "react";
import "./index.scss";
import jhlogo from "../../images/jhlogo.jpg";

function AboutUsCard({ name, role, img }) {
  return (
    <div class="aboutus_card">
      <div class="card_load">
        <img className="logo" src={jhlogo} alt="Logo" />
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
