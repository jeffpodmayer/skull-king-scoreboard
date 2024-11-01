import React, { useState } from "react";

interface AddPlayerProps {
  players: string[];
  onAddPlayer: (newPlayerName: string) => void;
}

export const PlayerList: React.FC<AddPlayerProps> = ({
  players,
  onAddPlayer,
}) => {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const maxPlayers = 6;

  const handleAddPlayer = () => {
    if (players.length >= maxPlayers) {
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 2000);
      setNewPlayerName("");
    } else if (newPlayerName.trim()) {
      onAddPlayer(newPlayerName);
      setNewPlayerName("");
      setShowWarning(false);
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
      {showWarning && (
        <p style={{ color: "red" }}>Maximum of {maxPlayers} players reached.</p>
      )}
    </div>
  );
};
