import React, { useEffect, useRef, useState } from "react";
import ScholarForm from "../../components/form";
import Navbar from "../../components/navbar";
import "./index.scss";
import CELLS from "vanta/dist/vanta.cells.min.js";
import * as THREE from "three";

function JoinUs() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      setVantaEffect(
        CELLS({
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
          spacing: 10
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
  return (
    <>
      <div className="join" ref={vantaRef}>
        <Navbar></Navbar>
        <div className="content">
          <div className="traveling-dot"></div>
          <h2 style={{ margin: "0px" }}>Ready to Join the Ranks?</h2>

          <div className="info">
            <div className="left-info">
              <h4>Sign Up:</h4>

              <p>Become part of the community by signing up with us!</p>

              <h4>Start Competing:</h4>

              <p>
                Gain Guild Points by playing in our weekly tournaments <br />{" "}
                and events.
              </p>

              <h4>Earn Rewards:</h4>

              <p>
                The more points you earn, the more rewards you
                <br /> can unlock!
              </p>
            </div>
            <div className="right-info">
              <ScholarForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinUs;
