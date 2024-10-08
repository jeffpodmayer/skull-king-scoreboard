import React from "react";

interface PlayerProps {
  player: {
    name: string;
    score: number;
  };
}

export const Player: React.FC<PlayerProps> = ({ player: { name, score } }) => {
  return (
    <div>
      <p>Player: {name}</p>
      <p>Score: {score} </p>
    </div>
  );
};
