import React, { useState, useEffect } from "react";
import styles from "./AddPlayer.module.css";

interface AddPlayerProps {
  players: string[];
  onAddPlayer: (newPlayerName: string) => void;
}

export const AddPlayer: React.FC<AddPlayerProps> = ({
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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleAddPlayer();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleAddPlayer]);

  return (
    <div className={styles.add_player}>
      <input
        type="text"
        placeholder="Enter Player Name"
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
