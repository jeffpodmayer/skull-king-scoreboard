import { useState } from "react";
import { useEffect } from "react";
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
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleAddPlayer = (newPlayerName: string) => {
    setPlayers((prevPlayers) => [...prevPlayers, newPlayerName]);
    setRoundBid((prev) => [...prev, 0]);
    setRoundTricksWon((prev) => [...prev, 0]);
    setBonusPoints((prev) => [...prev, 0]);
  };

  useEffect(() => {
    if (players.length === 0) {
      setIsGameStarted(false);
    }
  }, [players]);

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
  const startGame = () => {
    setIsGameStarted(true);
  };

  const startNewGame = () => {
    setIsGameStarted(false);
    setPlayers([]);
    setRounds([]);
    setRoundNumber(1);
    setRoundBid(Array(players.length).fill(0)); // Reset round bids
    setRoundTricksWon(Array(players.length).fill(0)); // Reset tricks won
    setBonusPoints(Array(players.length).fill(0)); // Reset bonus points
  };

  const editPreviousRound = (roundIndex: number) => {
    const roundData = rounds[roundIndex]; // Access the specific round
    if (roundData) {
      setRoundBid([...roundBid]); // Use the round's data to set roundBid
      setRoundTricksWon([...roundTricksWon]); // Adjust to your structure for tricks won
      setBonusPoints([...bonusPoints]); // Adjust to your structure for bonus points
    }
  };

  return (
    <div className="app-container">
      <div className="pirate-ship-background"></div>
      <div className="pirate-flag-background"></div>
      <div className="homepage-layout">
        <Hero />
        <>
          {(!isGameStarted || players.length === 0) && (
            <AddPlayer players={players} onAddPlayer={handleAddPlayer} />
          )}
        </>
      </div>
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
            isGameStarted={isGameStarted}
            startGame={startGame}
            startNewGame={startNewGame}
            editPreviousRound={editPreviousRound}
          />
        </>
      )}
      {isGameStarted && (
        <>
          <Scoreboard players={players} rounds={rounds} />
        </>
      )}
    </div>
  );
}

export default App;
