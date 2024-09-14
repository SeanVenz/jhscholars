import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

function HomeCard({ image, alt, sneak, link }) {
  const [isZooming, setIsZooming] = useState(false);
  const navigate = useNavigate();

  const handleSneakImageClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    setIsZooming(true);
    setTimeout(() => {
      navigate(link); // Navigate after the zoom effect
    }, 1000); // Adjust to match the zoom transition duration
  };

  return (
    <div className="card">
      <div className="card-details">
        {/* Sneak image (this will zoom and handle navigation) */}
        <img
          src={sneak}
          alt="Sneak Preview"
          className={`card-image sneak ${isZooming ? "zoom" : ""}`}
          onClick={handleSneakImageClick}
        />
        {/* Image inside the card, not clickable */}
        {/* <img
          src={image}
          alt={alt}
          className="card-image-link"
        /> */}
      </div>
    </div>
  );
}

export default HomeCard;
