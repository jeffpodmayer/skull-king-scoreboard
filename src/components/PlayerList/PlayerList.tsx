import { Player } from "./Player";

interface PlayerListProps {}

export const PlayerList: React.FC<PlayerListProps> = () => {
  const players = ["Jeff", "Dan", "Carolyn"];

  return (
    <div>
      <h1>PlayerList </h1>
      <div>
        {players.map((playerName, index) => (
          <Player key={index} player={{ name: playerName }} />
        ))}
      </div>
    </div>
  );
};
