import React, { useState } from "react";
import { Player } from "./Player";

interface PlayerListProps {}

export const PlayerList: React.FC<PlayerListProps> = () => {
  const [players, setPlayers] = useState<{ name: string; score: number }[]>([]);
  const [newPlayerName, setNewPlayerName] = useState("");

  const handleAddPlayer = () => {
    if (newPlayerName.trim()) {
      setPlayers([...players, { name: newPlayerName, score: 0 }]);
      setNewPlayerName("");
    } else {
      alert("Please enter a player name.");
    }
  };

  return (
    <div>
      <h2>PlayerList Component</h2>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <Player key={index} player={player} />
          ))}
        </tbody>
      </table>
      <div>
        <input
          type="text"
          placeholder="Enter player name"
          value={newPlayerName}
          onChange={(e) => setNewPlayerName(e.target.value)}
        />{" "}
        <button onClick={handleAddPlayer}>Add Player</button>
      </div>
    </div>
  );
};
