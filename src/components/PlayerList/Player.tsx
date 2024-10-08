import React from "react";

interface PlayerProps {
  player: {
    name: string;
    score: number;
  };
}

export const Player: React.FC<PlayerProps> = ({ player: { name, score } }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{score}</td>
    </tr>
  );
};
