import React from "react";
import { useState } from "react";

interface RoundTrackerProps {
  players: { name: string; score: number }[];
  roundNumber: number;
  onRoundUpdate: (
    playerName: string,
    roundBid: number,
    roundTricksWon: number,
    bonusPoints: number
  ) => void;
}

export const RoundTracker: React.FC<RoundTrackerProps> = ({
  players,
  roundNumber,
  onRoundUpdate,
}) => {
  const [roundBid, setRoundBid] = useState(0);
  const [roundTricksWon, setRoundTricksWon] = useState(0);
  const [bonusPoints, setBonusPoints] = useState(0);

  // const handleRoundSubmit = () => {
  //   onRoundUpdate(playerName, roundBid, roundTricksWon, bonusPoints);
  //   setRoundBid(0);
  //   setRoundTricksWon(0);
  //   setBonusPoints(0);
  // };

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
          {players.map((player) => (
            <tr key={player.name}>
              <td>{player.name}</td>
              <td>
                <input
                  type="number"
                  placeholder="Bid"
                  value={roundBid}
                  onChange={(e) => setRoundBid(Number(e.target.value))}
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Tricks Won"
                  value={roundTricksWon}
                  onChange={(e) => setRoundTricksWon(Number(e.target.value))}
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Bonus Points"
                  value={bonusPoints}
                  onChange={(e) => setBonusPoints(Number(e.target.value))}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button onClick={handleRoundSubmit}>Submit Round Scores</button> */}
    </div>
  );
};
