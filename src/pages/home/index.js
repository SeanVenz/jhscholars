import React from "react";
import { Link } from "react-router-dom";
import aboutus from "../../images/aboutus.png";
import joinus from "../../images/joinus.png";
import scholars from "../../images/scholars.png";
import jhbanner from '../../images/jhbanner.png'
import "./index.scss";

function Home() {
  return (
    <div className="home">
      <div className="logo-holder">
        <img src={jhbanner} alt="JH Logo" ></img>
      </div>
      <p>Empower. Play. Earn. Grow.</p>
      <p>Join the ultimate guild where scholars rise to the top through community, effort, and rewards.</p>
      <div className="navigation">
        <Link to="/about">
          <img src={aboutus} alt="About Us" />
        </Link>
        <Link to="/scholars">
          <img src={scholars} alt="Scholars" />
        </Link>
        <Link to="/join">
          <img src={joinus} alt="Join Us" className="join-us" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
