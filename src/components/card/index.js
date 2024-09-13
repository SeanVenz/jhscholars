import React from "react";
import topScholars from "../../data/scholars";

function MyCard() {
  return (
    <>
      {topScholars.map((scholar, index) => (
        <ul>
          <li>
            {scholar.name}, {scholar.gp}, {scholar.axieLevel}, {scholar.reward}{" "}
            USDC earned
          </li>
        </ul>
      ))}

      <h4>Need an axie? We've got you covered</h4>
      <p>
        Our scholars enjoy access to exclusive Axie rental vouchers! Unlock your
        potential by renting the best Axies in the game and climb the
        leaderboards with ease!
      </p>
      <p>Browse our axies here!</p>
      <a href="https://app.axieinfinity.com/profile/0x2ea79d25502280b9fa4809fa424c8a8501a454b6/axies/" target="_blank">
        <button>Axie</button>
      </a>
    </>
  );
}

export default MyCard;
