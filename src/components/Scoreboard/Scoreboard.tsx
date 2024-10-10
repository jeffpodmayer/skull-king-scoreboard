import React from "react";

interface ScoreboardProps {
  playerName: string;
  round: number;
  roundScore: number;
}

export const Scoreboard: React.FC<ScoreboardProps> = ({
  playerName,
  round,
  roundScore,
}) => {
  return (
    <div>
      <h2>Scoreboard Compnonent</h2>
      <table>
        <thead>
          <tr>
            <th>Round</th>
            <th>{playerName}</th>
            <th>{playerName}</th>
            <th>{playerName}</th>
          </tr>
        </thead>
        <tbody>
          <td>{round}</td>
          <td>{roundScore}</td>
          <td>{roundScore}</td>
          <td>{roundScore}</td>
        </tbody>
      </table>
    </div>
  );
};
