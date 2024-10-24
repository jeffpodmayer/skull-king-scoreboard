import React, { useState } from "react";

interface PlayerListProps {
  players: string[];
  onAddPlayer: (newPlayerName: string) => void;
}

export const PlayerList: React.FC<PlayerListProps> = ({ onAddPlayer }) => {
  const [newPlayerName, setNewPlayerName] = useState("");

  const handleAddPlayer = () => {
    if (newPlayerName.trim()) {
      onAddPlayer(newPlayerName);
      setNewPlayerName("");
    } else {
      alert("Please enter a player name.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter player name"
        value={newPlayerName}
        onChange={(e) => setNewPlayerName(e.target.value)}
      />
      <button onClick={handleAddPlayer}>Add Player</button>
    </div>
  );
};
