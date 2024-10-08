import React from "react";

interface RoundTrackerProps {
  roundNumber: number;
  roundBid: number;
  roundTricksWon: number;
  bonusPoints: number;
  roundScore: number;
}

export const RoundTracker: React.FC<RoundTrackerProps> = ({
  roundNumber,
  roundBid,
  roundTricksWon,
  bonusPoints,
  roundScore,
}) => {
  return (
    <div>
      <h2>Round Tracker Component</h2>
      <p>Round {roundNumber} </p>
      <p>Bid: {roundBid}</p>
      <p>Tricks Won: {roundTricksWon}</p>
      <p>Round Bonus Points: {bonusPoints}</p>
      <p>Round Score: {roundScore}</p>
    </div>
  );
};
