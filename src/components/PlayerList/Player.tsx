import React from "react";

interface PlayerProps {
  player: {
    name: string;
  };
}

export const Player: React.FC<PlayerProps> = ({ player: { name } }) => {
  return (
    <div>
      <p>Player {name}</p>
    </div>
  );
};
