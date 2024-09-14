import React from "react";
import ScholarForm from "../../components/form";
import Navbar from "../../components/navbar";
import "./index.scss";

function JoinUs() {
  return (
    <>
      <div className="join">
        <Navbar></Navbar>
        <h2 style={{margin: "0px"}}>Ready to Join the Ranks?</h2>

        <div className="info">
          <div className="left-info">
            <h4>Sign Up:</h4>

            <p>Become part of the community by signing up with us!</p>

            <h4>Start Competing:</h4>

            <p>
              Gain Guild Points by playing in our weekly tournaments <br/> and events.
            </p>

            <h4>Earn Rewards:</h4>

            <p>The more points you earn, the more rewards you<br/> can unlock!</p>
          </div>
          <div className="right-info">
            <ScholarForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinUs;
