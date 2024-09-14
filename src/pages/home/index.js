import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jhbanner from "../../images/jhbanner.png";
import aboutussneakpeek from "../../images/aboutussneakpeek.png";
import schlarssneak from "../../images/scholarssneak.png";
import "./index.scss";
import { homeCardDetails } from "../../data/scholars";

function Home() {
  const [zoomedImage, setZoomedImage] = useState(null);
  const navigate = useNavigate();

  const handleImageClick = (link, index) => {
    setZoomedImage(index);
    setTimeout(() => {
      navigate(link);
    }, 1000); // Match this with your zoom duration
  };

  return (
    <div className="home">
      <div className="logo-holder">
        <img src={jhbanner} alt="JH Logo" />
      </div>
      <p>Empower. Play. Earn. Grow.</p>
      <p>
        Join the ultimate guild where scholars rise to the top through
        community, effort, and rewards.
      </p>
      <div className="navigation">
        {homeCardDetails.map((detail, index) => (
          <div className="card" key={index}>
              <img
                src={detail.sneak}
                alt="sneak"
                className={`sneak ${zoomedImage === index ? "zoom" : ""}`}
              />
              <img
                src={detail.image}
                alt={detail.alt}
                className={`card-image-link ${zoomedImage === index ? "hidden" : ""}`}
                onClick={() => handleImageClick(detail.link, index)}
              />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
