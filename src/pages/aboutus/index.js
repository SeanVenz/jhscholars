import React from "react";
import { Link } from "react-router-dom";
import {rewards} from '../../data/scholars'

function AboutUs() {
  return (
    <>
      <h3>Welcome to the JH Community Guild!</h3>

      <p>
        We are a guild that thrives on unity, competition, and growth. Our
        scholars are empowered through exciting challenges, generous rewards,
        and access to the best tools and support to maximize their performance
        in the world of Axie Classic. Whether you're here to compete or
        collaborate, there's a place for you in our ever-growing community.
      </p>

      <h4>Season Rewards & Incentives</h4>

      <p>
        We value the hard work of our scholars! The size of our season rewards
        is tied to the size of our community. When we hit key milestones like 60
        members, our rewards grow even bigger! Check out the prizes for Season
        5:
      </p>

      <h4>Season Rewards & Incentives</h4>

      <p>
        We value the hard work of our scholars! The size of our season rewards
        is tied to the size of our community. When we hit key milestones like 60
        members, our rewards grow even bigger! Check out the prizes for Season
        5:
      </p>

      {rewards.map ((reward, index) => (
        <ul>
          <li key={index}>{reward.place}</li>
          <li>{reward.reward}</li>
        </ul>
      ))}

      <Link to="/scholars">Check out The Top scholars</Link>
    </>
  );
}

export default AboutUs;
