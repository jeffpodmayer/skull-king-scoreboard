import React from "react";
import { useState } from "react";

interface RoundTrackerProps {
  players: { name: string; score: number }[];
  roundNumber: number;
  onRoundUpdate: (newScores: number[]) => void;
}

export const RoundTracker: React.FC<RoundTrackerProps> = ({
  players,
  roundNumber,
  onRoundUpdate,
}) => {
  const [roundBid, setRoundBid] = useState<number[]>(
    Array(players.length).fill(0)
  );
  const [roundTricksWon, setRoundTricksWon] = useState<number[]>(
    Array(players.length).fill(0)
  );
  const [bonusPoints, setBonusPoints] = useState<number[]>(
    Array(players.length).fill(0)
  );

  const handleInputChange = (
    index: number,
    setter: React.Dispatch<React.SetStateAction<number[]>>,
    value: number
  ) => {
    setter((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const handleRoundSubmit = () => {
    const newScores = players.map((_, index) => {
      const bid = roundBid[index];
      const tricks = roundTricksWon[index];
      const bonus = bonusPoints[index];
      let score = 0;
      if (bid === tricks) {
        score = bid * 10 + bonus;
      } else {
        score = bid * -10;
      }
      return score;
    });

    onRoundUpdate(newScores);

    setRoundBid(Array(players.length).fill(0));
    setRoundTricksWon(Array(players.length).fill(0));
    setBonusPoints(Array(players.length).fill(0));
  };

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
                  value={roundBid[index]}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      setRoundBid,
                      Number(e.target.value)
                    )
                  }
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
      <button onClick={handleRoundSubmit}>Submit Round Scores</button>
    </div>
  );
};
