import { Player } from "./Player";

interface PlayerListProps {}

export const PlayerList: React.FC<PlayerListProps> = () => {
  const players = ["Jeff", "Dan", "Carolyn"];

  return (
    <div>
      <h2>PlayerList Component </h2>
      <div>
        {players.map((playerName, index) => (
          <Player key={index} player={{ name: playerName, score: 0 }} />
        ))}
      </div>
    </div>
  );
};
