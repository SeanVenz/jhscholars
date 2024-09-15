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
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x0,
          points: 5.0,
        })
      );
    }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null); // Clear effect reference
      }
    };
  }, [vantaEffect]);

  const handleImageClick = (link, index) => {
    setZoomedImage(index);
    setTimeout(() => {
      navigate(link);
    }, 1000); // Match this with your zoom duration
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
          <div className="card" key={index}>
            <img
              src={detail.sneak}
              alt="sneak peek"
              className={`sneak ${zoomedImage === index ? "zoom" : ""}`}
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
        ))}
      </div>
    </div>
  );
}

export default Home;
