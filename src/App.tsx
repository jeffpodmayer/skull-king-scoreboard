import { useState } from "react";
import { PlayerList } from "./components/PlayerList/PlayerList";
import { RoundTracker } from "./components/RoundTracker/RoundTracker";
import { Scoreboard } from "./components/Scoreboard/Scoreboard";
import { Hero } from "./components/Hero/Hero";

import "./App.css";

function App() {
  const [players, setPlayers] = useState<string[]>([]); // Now just an array of player names
  const [rounds, setRounds] = useState<
    { roundNumber: number; scores: number[] }[]
  >([]);
  const [roundNumber, setRoundNumber] = useState(1);

  const handleAddPlayer = (newPlayerName: string) => {
    setPlayers((prevPlayers) => [...prevPlayers, newPlayerName]);
  };

  const handleRoundUpdate = (newScores: number[]) => {
    setRounds((prevRounds) => [
      ...prevRounds,
      { roundNumber, scores: newScores },
    ]);

    if (roundNumber < 10) {
      setRoundNumber((prev) => prev + 1);
    } else {
      setRoundNumber(11);
    }
  };

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
