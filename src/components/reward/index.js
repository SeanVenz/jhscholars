import React from "react";
import "./index.scss";

function RewardList({ place, reward }) {
  return (
    <div className="reward-list">
      <span>{place}</span>
      <p className="social-link" href="#" aria-label="Social Link 1">
        {reward}$
      </p>
    </div>
  );
}

export default RewardList;
