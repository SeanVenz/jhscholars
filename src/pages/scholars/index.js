import React, { useEffect, useRef, useState } from "react";
import MyCard from "../../components/card";
import Navbar from "../../components/navbar";
import Button from "../../components/button";
import "./index.scss";
import RINGS from "vanta/dist/vanta.rings.min.js";
import * as THREE from "three";

function Scholars() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        RINGS({
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
    <>
      <div className="scholars" ref={vantaRef}>
        <Navbar></Navbar>
        <h2 style={{ margin: "0px" }}>Meet Our Top Scholars!</h2>
        <MyCard></MyCard>

        <div className="info">
          <h4 style={{ margin: "0px" }}>Need an axie? We've got you covered</h4>
          <p>
            Our scholars enjoy access to exclusive Axie rental vouchers!
            Unlock your potential by renting the best Axies in the game and
            climb the leaderboards with ease!
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
