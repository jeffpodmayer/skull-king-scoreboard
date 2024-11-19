import { useState } from "react";
import { useEffect } from "react";
import { AddPlayer } from "./components/AddPlayer/AddPlayer";
import { RoundTracker } from "./components/RoundTracker/RoundTracker";
import { Scoreboard } from "./components/Scoreboard/Scoreboard";
import { Hero } from "./components/Hero/Hero";
import "./styles/global.css";

function App() {
  const [players, setPlayers] = useState<string[]>([]);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [roundNumber, setRoundNumber] = useState(1);
  const [roundBid, setRoundBid] = useState<number[]>([]);
  const [roundTricksWon, setRoundTricksWon] = useState<number[]>([]);
  const [bonusPoints, setBonusPoints] = useState<number[]>([]);
  const [rounds, setRounds] = useState<
    {
      roundNumber: number;
      playerData: {
        playerName: string;
        bid: number;
        tricksWon: number;
        bonusPoints: number;
      }[];
    }[]
  >([]);

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

  const handleRoundUpdate = (
    newPlayerData: {
      playerName: string;
      bid: number;
      tricksWon: number;
      bonusPoints: number;
    }[]
  ) => {
    setRounds((prevRounds) => [
      ...prevRounds,
      { roundNumber, playerData: newPlayerData },
    ]);

    setRoundNumber((prev) => (roundNumber < 10 ? prev + 1 : 11));
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
    const roundData = rounds[roundIndex];
    if (roundData) {
      // Update the bid, tricks, and bonus points for each player in this round
      setRoundBid(roundData.playerData.map((data) => data.bid));
      setRoundTricksWon(roundData.playerData.map((data) => data.tricksWon));
      setBonusPoints(roundData.playerData.map((data) => data.bonusPoints));
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
