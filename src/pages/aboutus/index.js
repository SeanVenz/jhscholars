import React from "react";
import { Link } from "react-router-dom";
import { rewards } from "../../data/scholars";
import Navbar from "../../components/navbar";
import "./index.scss";
import RewardList from "../../components/reward";
import Button from "../../components/button";

function AboutUs() {
  return (
    <div className="about-us">
      <Navbar />
      <div className="content">
        <h3>Welcome to the JH Community Guild!</h3>
        <p>
          We are a guild that thrives on unity, competition, and growth. Our
          scholars are empowered through exciting challenges,
          <br /> generous rewards, and access to the best tools and support to
          maximize their performance in the world of Axie Classic.
          <br /> Whether you're here to compete or collaborate, there's a place
          for you in our ever-growing community.
        </p>

        <h4>Season Rewards & Incentives</h4>
        <p>
          We value the hard work of our scholars! The size of our season rewards
          is tied to the size of our community.
          <br /> When we hit key milestones like 60 members, our rewards grow
          even bigger! Check out the prizes for Season 5:
        </p>
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
        <Button link="/scholars" text="TOP SCHOLARS"></Button>
      </div>
    </div>
  );
}

export default AboutUs;
