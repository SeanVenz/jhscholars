import React from "react";
import ScholarForm from "../../components/form";
import Navbar from "../../components/navbar";

function JoinUs() {
  return (
    <>
    <Navbar></Navbar>
      <h4>Ready to Join the Ranks?</h4>

      <h5>Sign Up:</h5>

      <p>Become part of the community by signing up with us!</p>

      <h5>Start Competing:</h5>

      <p>Gain Guild Points by playing in our weekly tournaments and events.</p>

      <h5>Earn Rewards:</h5>

      <p>The more points you earn, the more rewards you can unlock!</p>

      <ScholarForm/>
    </>
  );
}

export default JoinUs;
