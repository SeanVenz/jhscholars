import React from "react";
import MyCard from "../../components/card";
import Navbar from "../../components/navbar";
import Button from "../../components/button";
import "./index.scss";

function Scholars() {
  return (
    <>
      <div className="scholars">
        <Navbar></Navbar>
        <h2>Meet Our Top Scholars!</h2>
        <MyCard></MyCard>

        <div className="info">
          <h4>Need an axie? We've got you covered</h4>
          <p>
            Our scholars enjoy access to exclusive Axie rental vouchers! Unlock
            your potential by renting the best Axies in the game and climb the
            leaderboards with ease!
          </p>
          <p>Browse our axies here!</p>
          <div className="btn">
            <Button text="A X I E S"></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scholars;
