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
      <h3>Round: {roundNumber}</h3>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Bid</th>
            <th>Tricks Won</th>
            <th>Bonus Points</th>
            <th>Round Score</th>
          </tr>
        </thead>
        <tbody>
          <td>Jeff</td>
          <td>{roundBid}</td>
          <td>{roundTricksWon}</td>
          <td>{bonusPoints}</td>
          <td>{roundScore}</td>
        </tbody>
      </table>
    </div>
  );
};
