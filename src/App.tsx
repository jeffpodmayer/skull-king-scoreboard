import { useState } from "react";
import { PlayerList } from "./components/PlayerList/PlayerList";
import { RoundTracker } from "./components/RoundTracker/RoundTracker";
import { Scoreboard } from "./components/Scoreboard/Scoreboard";
import { Hero } from "./components/Hero/Hero";

import "./App.css";

function App() {
  const [roundNumber, setRoundNumber] = useState(1);
  const [roundScores, setRoundScores] = useState<
    { roundNumber: number; roundScore: number }[]
  >([]);

  const handleRoundUpdate = (
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
      <PlayerList />
      <RoundTracker
        roundNumber={roundNumber}
        onRoundUpdate={handleRoundUpdate}
      />
      <Scoreboard
        playerName="Jeff"
        round={roundNumber}
        roundScore={currentRoundScore}
      />
    </div>
  );
}

export default App;
