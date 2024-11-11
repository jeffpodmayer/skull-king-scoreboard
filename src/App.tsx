import { useState } from "react";
import { AddPlayer } from "./components/AddPlayer/AddPlayer";
import { RoundTracker } from "./components/RoundTracker/RoundTracker";
import { Scoreboard } from "./components/Scoreboard/Scoreboard";
import { Hero } from "./components/Hero/Hero";
import "./styles/global.css";

function App() {
  const [players, setPlayers] = useState<string[]>([]);
  const [rounds, setRounds] = useState<
    { roundNumber: number; scores: number[] }[]
  >([]);
  const [roundNumber, setRoundNumber] = useState(1);
  const [roundBid, setRoundBid] = useState<number[]>([]);
  const [roundTricksWon, setRoundTricksWon] = useState<number[]>([]);
  const [bonusPoints, setBonusPoints] = useState<number[]>([]);

  const handleAddPlayer = (newPlayerName: string) => {
    setPlayers((prevPlayers) => [...prevPlayers, newPlayerName]);
    setRoundBid((prev) => [...prev, 0]);
    setRoundTricksWon((prev) => [...prev, 0]);
    setBonusPoints((prev) => [...prev, 0]);
  };

  const removePlayer = (playerToRemove: string) => {
    setPlayers(players.filter((player) => player !== playerToRemove));
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

  const playersExist = players.length >= 1;

  return (
    <div className="app-container">
      <Hero />
      <AddPlayer players={players} onAddPlayer={handleAddPlayer} />
      {playersExist && (
        <>
          <RoundTracker
            players={players}
            roundNumber={roundNumber}
            onRoundUpdate={handleRoundUpdate}
            roundBid={roundBid}
            setRoundBid={setRoundBid}
            roundTricksWon={roundTricksWon}
            setRoundTricksWon={setRoundTricksWon}
            bonusPoints={bonusPoints}
            setBonusPoints={setBonusPoints}
            removePlayer={removePlayer}
          />
          <Scoreboard players={players} rounds={rounds} />
        </>
      )}
    </div>
  );
}

export default App;
