import React, { useState } from "react";
import { topScholars } from "../../data/scholars";
import "./index.scss";

function MyCard() {
  return (
    <div className="card-holder">
      {topScholars.map((scholar, index) => (
        <ul>
          <Card key={index} scholar={scholar} />
        </ul>
      ))}
    </div>
  );
}

function Card({ scholar }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="card">
      <div
        className="image_container"
        style={{
          backgroundImage: `url(${scholar.bg})`,
          backgroundSize: "cover",
        }}
      >
        {isLoading && <div className="spinner"></div>}
        <img
          src={scholar.link}
          alt={scholar.name}
          onLoad={handleImageLoad}
          style={{ display: isLoading ? "none" : "block" }}
        />
      </div>
      <div className="title">
        <span>{scholar.name}</span>
      </div>
      <div className="size">
        <span>Scholar Axie Level: {scholar.axieLevel}</span>
        <br />
        <span>Scholar Guild Point: {scholar.gp}</span>
        <br />
        <span>Scholar Place: {scholar.place}</span>
      </div>
      <div className="action">
        <div className="price">
          <span>Reward Last Season: ${scholar.reward}</span>
        </div>
      </div>
    </div>
  );
}

export default MyCard;
