import React from "react";
import {topScholars} from "../../data/scholars";
import "./index.scss";

function MyCard() {
  return (
    <>
      <div className="card-holder">
        {topScholars.map((scholar, index) => (
          <ul>
            <div class="card">
              <div class="image_container">
                <img src={scholar.link} alt={scholar.link} />
              </div>
              <div class="title">
                <span>{scholar.name}</span>
              </div>
              <div class="size">
                <span>Scholar Axie Level: {scholar.axieLevel}</span>
                <br />
                <span>Scholar Guild Point: {scholar.gp}</span>
                <br />
                <span>Scholar Place: {scholar.place}</span>
              </div>
              <div class="action">
                <div class="price">
                  <span>Reward Last Season: ${scholar.reward}</span>
                </div>
              </div>
            </div>
          </ul>
        ))}
      </div>
      <h4>Need an axie? We've got you covered</h4>
      <p>
        Our scholars enjoy access to exclusive Axie rental vouchers! Unlock your
        potential by renting the best Axies in the game and climb the
        leaderboards with ease!
      </p>
      <p>Browse our axies here!</p>
      <a
        href="https://app.axieinfinity.com/profile/0x2ea79d25502280b9fa4809fa424c8a8501a454b6/axies/"
        target="_blank"
        rel="noreferrer"
      >
        <button>Axie</button>
      </a>
    </>
  );
}

export default MyCard;
