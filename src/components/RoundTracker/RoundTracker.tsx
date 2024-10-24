import React from "react";
import { useState } from "react";

interface RoundTrackerProps {
  players: string[];
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
      if (bid === 0) {
        if (tricks === 0) {
          score = roundNumber * 10; // successful 0 bid
        } else {
          score = roundNumber * -10; // failed 0 bid
        }
      } else {
        // Regular bid
        if (bid === tricks) {
          score = bid * 10 + bonus; // Bid met with bonus points
        } else {
          score = bid * -10; // Failed bid
        }
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
          {players.map((player, index) => (
            <tr key={player}>
              <td>{player}</td>
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
                  value={roundTricksWon[index]}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      setRoundTricksWon,
                      Number(e.target.value)
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  placeholder="Bonus Points"
                  value={bonusPoints[index]}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      setBonusPoints,
                      Number(e.target.value)
                    )
                  }
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
