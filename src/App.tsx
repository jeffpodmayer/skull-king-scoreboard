import { useState } from "react";
import { PlayerList } from "./components/PlayerList/PlayerList";
import { RoundTracker } from "./components/RoundTracker/RoundTracker";
import { Scoreboard } from "./components/Scoreboard/Scoreboard";
import { Hero } from "./components/Hero/Hero";

import "./App.css";

function App() {
  const [players, setPlayers] = useState<{ name: string; score: number }[]>([]); // change into an array of strings to jsut be an array of playernames
  const [rounds, setRounds] = useState<
    { roundNumber: number; scores: number[] }[]
  >([]);
  const [roundNumber, setRoundNumber] = useState(1);

  const handleAddPlayer = (newPlayerName: string) => {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      { name: newPlayerName, score: 0 },
    ]);
  };

  // Updates the Round when a score is submitted
  const handleRoundUpdate = (newScores: number[]) => {
    setRounds((prevRounds) => [
      ...prevRounds,
      { roundNumber, scores: newScores },
    ]);
    setRoundNumber((prev) => prev + 1);
  };

  // // could get rid of this and move it into the scoreboard component
  // // conside only storing the round scores - compute player score using the rounnd scores on the fly
  // // extract the compting fro overall player scores into it's own file
  // setPlayers((prevPlayers) =>
  //   prevPlayers.map((player, index) => ({
  //     ...player,
  //     score: player.score + newScores[index],
  //   }))
  // );

  return (
    <div>
      <Hero />
      <PlayerList players={players} onAddPlayer={handleAddPlayer} />
      <RoundTracker
        players={players}
        roundNumber={roundNumber}
        onRoundUpdate={handleRoundUpdate}
      />
      <Scoreboard players={players} rounds={rounds} />
    </div>
  );
}

export default App;
