import React from "react";

interface PlayerProps {
  player: {
    name: string;
  };
}

export const Player: React.FC<PlayerProps> = ({ player }) => {
  return (
    <tr>
      <td>{player.name}</td>
    </tr>
  );
};
