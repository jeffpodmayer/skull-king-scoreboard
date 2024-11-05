import React from "react";
import { calculateNewScores } from "../../utils/ScoreCalculator";
import UserIcon from "../../assets/icons/close_icon.png";
import styles from "./RoundTracker.module.css";
interface RoundTrackerProps {
  players: string[];
  roundNumber: number;
  onRoundUpdate: (newScores: number[]) => void;
  roundBid: number[];
  setRoundBid: React.Dispatch<React.SetStateAction<number[]>>;
  roundTricksWon: number[];
  setRoundTricksWon: React.Dispatch<React.SetStateAction<number[]>>;
  bonusPoints: number[];
  setBonusPoints: React.Dispatch<React.SetStateAction<number[]>>;
}

export const RoundTracker: React.FC<RoundTrackerProps> = ({
  players,
  roundNumber,
  onRoundUpdate,
  roundBid,
  setRoundBid,
  roundTricksWon,
  setRoundTricksWon,
  bonusPoints,
  setBonusPoints,
}) => {
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
    const newScores = calculateNewScores(
      players,
      roundBid,
      roundTricksWon,
      bonusPoints,
      roundNumber
    );
    onRoundUpdate(newScores);

    setRoundBid(Array(players.length).fill(0));
    setRoundTricksWon(Array(players.length).fill(0));
    setBonusPoints(Array(players.length).fill(0));
  };

  const isGameOver = roundNumber > 10;

  return (
    <div className={styles.round_tracker_container}>
      <div className={styles.round_tracker}>
        <h3>{isGameOver ? "Game Over" : `Round: ${roundNumber}`}</h3>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Bid</th>
              <th>Tricks Won</th>
              <th>Bonus Points</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={player}>
                <td>
                  <img
                    src={UserIcon}
                    alt="Remove Player Icon"
                    style={{
                      width: "20px",
                      marginRight: "3px",
                      marginBottom: "-3px",
                    }}
                  />
                  {player}
                </td>
                <td>
                  <input
                    type="number"
                    min="0"
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
                    min="0"
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
                    min="0"
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
        <button onClick={handleRoundSubmit} disabled={isGameOver}>
          Submit Round Scores
        </button>
      </div>
    </div>
  );
};
