import { useState } from "react";
import { PlayerList } from "./components/PlayerList/PlayerList";
import { RoundTracker } from "./components/RoundTracker/RoundTracker";
import { Scoreboard } from "./components/Scoreboard/Scoreboard";
import { Hero } from "./components/Hero/Hero";

import "./App.css";

function App() {
  const [players, setPlayers] = useState<{ name: string; score: number }[]>([]);
  const [rounds, setRounds] = useState<
    { roundNumber: number; scores: number[] }[]
  >([]);
  const [roundNumber, setRoundNumber] = useState(1);
  const [roundScores, setRoundScores] = useState<
    { roundNumber: number; roundScore: number }[]
  >([]);

  // Updates Players across all components when a new player is added
  const handleAddPlayer = (newPlayerName: string) => {
    setPlayers((prevPlayers) => [
      ...prevPlayers,
      { name: newPlayerName, score: 0 },
    ]);
  };

  // Updates the Round when a score is submitted
  const handleRoundUpdate = (
    roundNumber: number,
    newScores: number[],
    roundBid: number,
    roundTricksWon: number,
    bonusPoints: number
  ) => {
    const updatedScores = newScores.map((score, index) => {
      let roundScore = 0;
      if (roundBid === roundTricksWon) {
        roundScore = roundBid * 10 + bonusPoints;
      } else {
        roundScore = roundBid * -10;
      }
      return roundScore;
    });

    setRounds((prevRounds) => [
      ...prevRounds,
      { roundNumber, scores: updatedScores },
    ]);

    setPlayers((prevPlayers) =>
      prevPlayers.map((player, index) => ({
        ...player,
        score: player.score + updatedScores[index],
      }))
    );

    setRoundNumber((prev) => prev + 1);
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
