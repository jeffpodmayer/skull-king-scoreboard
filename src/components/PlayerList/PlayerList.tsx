import { Player } from "./Player";

interface PlayerListProps {}

export const PlayerList: React.FC<PlayerListProps> = () => {
  const players = [
    { name: "Jeff", score: 0 },
    { name: "Dan", score: 0 },
    { name: "Carolyn", score: 0 },
  ];

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
    </div>
  );
};
