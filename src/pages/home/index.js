import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import jhbanner from "../../images/jhbanner.png";
import "./index.scss";
import { homeCardDetails } from "../../data/scholars";
import HALO from "vanta/dist/vanta.halo.min.js";
import * as THREE from "three";

function Home() {
  const [zoomedImage, setZoomedImage] = useState(null);
  const navigate = useNavigate();
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        HALO({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
        })
      );
    }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }
    };
  }, [vantaEffect]);

  const handleImageClick = (link, index) => {
    setZoomedImage(index);
    setTimeout(() => {
      navigate(link);
    }, 1000);
  };

  return (
    <div className="home" ref={vantaRef}>
      <div className="logo-holder">
        <img src={jhbanner} alt="JH Logo" />
      </div>
      <h1 style={{ margin: "0" }}>Empower. Play. Earn. Grow.</h1>
      <p>
        Join the ultimate guild where scholars rise to the top through
        community, effort, and rewards.
      </p>
      <div className="navigation">
        {homeCardDetails.map((detail, index) => (
          <ul>
            <div className="card" key={index}>
            {isLoading && <div className="spinner"></div>}
              <img
                src={detail.sneak}
                alt="sneak peek"
                className={`sneak ${zoomedImage === index ? "zoom" : ""}`}
                onLoad={handleImageLoad}
              />
              <img
                src={detail.image}
                alt={detail.alt}
                className={`card-image-link ${
                  zoomedImage === index ? "hidden" : ""
                }`}
                onClick={() => handleImageClick(detail.link, index)}
              />
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Home;
