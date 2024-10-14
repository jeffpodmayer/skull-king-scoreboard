import { useState } from "react";
import { PlayerList } from "./components/PlayerList/PlayerList";
import { RoundTracker } from "./components/RoundTracker/RoundTracker";
import { Scoreboard } from "./components/Scoreboard/Scoreboard";
import { Hero } from "./components/Hero/Hero";

import "./App.css";

function App() {
  const [players, setPlayers] = useState<{ name: string; score: number }[]>([]);
  const [roundNumber, setRoundNumber] = useState(1);
  const [roundScores, setRoundScores] = useState<
    { roundNumber: number; roundScore: number }[]
  >([]);

  //Updates Players across all components when new player is added
  const handleAddPlayer = (newPlayerName: string) => {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      { name: newPlayerName, score: 0 },
    ]);
  };

  //Updates Round when score is submitted
  const handleRoundUpdate = (
    playerName: string,
    roundBid: number,
    roundTricksWon: number,
    bonusPoints: number
  ) => {
    let roundScore = 0;

    if (roundBid == roundTricksWon) {
      roundScore = roundBid * 10 + bonusPoints;
    } else if (roundBid != roundTricksWon) {
      roundScore = roundBid * -10;
    }
    setRoundScores((prevScores) => [
      ...prevScores,
      { roundNumber, roundScore },
    ]);

    setRoundNumber((prev) => prev + 1);
  };

  const currentRoundScore =
    roundScores.find((score) => score.roundNumber === roundNumber)
      ?.roundScore || 0;

  return (
    <div>
      <Hero />
      <PlayerList players={players} onAddPlayer={handleAddPlayer} />
      <RoundTracker
        players={players}
        roundNumber={roundNumber}
        onRoundUpdate={handleRoundUpdate}
      />
      {/* <Scoreboard round={roundNumber} roundScore={currentRoundScore} /> */}
    </div>
  );
}

export default App;
