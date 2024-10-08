import React from "react";

interface RoundTrackerProps {
  roundNumber: number;
}

export const RoundTracker: React.FC<RoundTrackerProps> = ({ roundNumber }) => {
  return (
    <div>
      <h3>Round {roundNumber} </h3>
    </div>
  );
};
