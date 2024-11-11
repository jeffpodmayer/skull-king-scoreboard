import React from "react";
import { computeTotalScores } from "../../utils/ScoreCalculator";
import styles from "./Scoreboard.module.css";

interface ScoreboardProps {
  players: string[];
  rounds: { roundNumber: number; scores: number[] }[];
}

export const Scoreboard: React.FC<ScoreboardProps> = ({ players, rounds }) => {
  const totalScores = computeTotalScores(players, rounds);

  // Combine players and their scores, then sort by score descending
  const sortedPlayers = players
    .map((player, index) => ({ name: player, score: totalScores[index] }))
    .sort((a, b) => b.score - a.score);

  return (
    <div className={styles.scoreboard_container}>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Round Scores</h3>
      <table>
        <thead>
          <tr>
            <th>Round</th>
            {players.map((player, index) => (
              <th key={index}>{player}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rounds.map((round, roundIndex) => (
            <tr key={roundIndex}>
              <td>{round.roundNumber}</td>
              {round.scores.map((score, playerIndex) => (
                <td key={playerIndex}>{score}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
