import React from "react";

interface ScoreboardProps {
  players: string[];
  rounds: { roundNumber: number; scores: number[] }[];
}

export const Scoreboard: React.FC<ScoreboardProps> = ({ players, rounds }) => {
  const computeTotalScores = () => {
    return players.map((_, playerIndex) => {
      return rounds.reduce((totalScore, round) => {
        return totalScore + round.scores[playerIndex];
      }, 0);
    });
  };

  const totalScores = computeTotalScores();

  return (
    <div>
      <h2>Scoreboard</h2>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player}</td>
              <td>{totalScores[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Round-by-Round Scores</h3>
      <table>
        <thead>
          <tr>
            <th>Round</th>
            {players.map((player, index) => (
              <th key={index}>{player}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rounds.map((round, roundIndex) => (
            <tr key={roundIndex}>
              <td>{round.roundNumber}</td>
              {round.scores.map((score, playerIndex) => (
                <td key={playerIndex}>{score}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
