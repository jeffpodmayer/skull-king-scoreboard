import { useState } from "react";
import { PlayerList } from "./components/PlayerList/PlayerList";
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
        roundBid={roundBid}
        setRoundBid={setRoundBid}
        roundTricksWon={roundTricksWon}
        setRoundTricksWon={setRoundTricksWon}
        bonusPoints={bonusPoints}
        setBonusPoints={setBonusPoints}
      />
      <Scoreboard players={players} rounds={rounds} />
    </div>
  );
}

export default App;
