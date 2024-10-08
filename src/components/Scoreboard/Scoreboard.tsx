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
      <p>Round: {round}</p>
      <p>Player: {playerName}</p>
      <p>Score: {roundScore}</p>
    </div>
  );
};
