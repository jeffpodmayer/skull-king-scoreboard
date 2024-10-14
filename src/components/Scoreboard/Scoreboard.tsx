import React from "react";

interface ScoreboardProps {
  players: { name: string; score: number }[];
  rounds: { roundNumber: number; scores: number[] }[];
}

export const Scoreboard: React.FC<ScoreboardProps> = ({ players, rounds }) => {
  return (
    <div>
      <h2>Scoreboard Compnonent</h2>
      <table>
        <thead>
          <tr>
            <th>Round</th>
            {players.map((player, index) => (
              <th key={index}>{player.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rounds.map((roundData, roundIndex) => (
            <tr key={roundIndex}>
              <td>{roundData.roundNumber}</td>
              {roundData.scores.map((score, playerIndex) => (
                <td key={playerIndex}>{score}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
