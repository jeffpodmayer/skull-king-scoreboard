import React from "react";

interface PlayerProps {
  player: {
    name: string;
    score: number;
  };
}

export const Player: React.FC<PlayerProps> = ({ player }) => {
  return (
    <tr>
      <td>{player.name}</td>
      <td>{player.score}</td>
    </tr>
  );
};
