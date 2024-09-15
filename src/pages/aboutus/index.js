import React, { useEffect, useRef, useState } from "react";
import { rewards } from "../../data/scholars";
import Navbar from "../../components/navbar";
import "./index.scss";
import RewardList from "../../components/reward";
import Button from "../../components/button";
import GLOBE from "vanta/dist/vanta.globe.min.js";
import * as THREE from "three";
import squanchy from "../../images/squanchy.png";
import yarrk from "../../images/yarrk.png";
import rosamiya from "../../images/rosamiya.png";
import jackhowdy from "../../images/jackhowdy.png";

function AboutUs() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        GLOBE({
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
        setVantaEffect(null);
      }
    };
  }, [vantaEffect]);
  return (
    <div className="about-us" ref={vantaRef}>
      <Navbar />
      <div className="content">
        <h3>Welcome to the JH Community Guild!</h3>

        <div className="text">
          <p>
            We are a guild that thrives on unity, competition, and growth. Our
            scholars are empowered through exciting challenges, generous
            rewards, and access to the best tools and support to maximize their
            performance in the world of Axie Classic. Whether you're here to
            compete or collaborate, there's a place for you in our ever-growing
            community.
          </p>
        </div>

        <h4>Season Rewards & Incentives</h4>
        <div className="text">
          <p>
            We value the hard work of our scholars! The size of our season
            rewards is tied to the size of our community. When we hit key
            milestones like 60 members, our rewards grow even bigger! Check out
            the prizes for Season 5:
          </p>
        </div>
        <div className="rewards">
          {rewards.map((reward, index) => (
            <ul key={index}>
              <RewardList
                place={reward.place}
                reward={reward.reward}
              ></RewardList>
            </ul>
          ))}
        </div>
        <Button link="/scholars" text="SCHOLARS"></Button>

        <h4 style={{ margin: "0px", paddingTop: "2%" }}>Meet the Team</h4>
        <div className="team">
          <ul>
            <div className="img-container special">
              <img src={jackhowdy} alt="Jackhowdy" />
            </div>
          </ul>

          <ul>
            <div className="img-container special">
              <img src={yarrk} alt="Yarrk" />
            </div>
          </ul>
          <ul>
            <div className="img-container special">
              <img src={squanchy} alt="Squanchy" />\
            </div>
          </ul>
          <ul>
            <div className="img-container special">
              <img src={rosamiya} alt="Rosa Miya" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
