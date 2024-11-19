interface Round {
  roundNumber: number;
  playerData: PlayerData[];
}

interface PlayerData {
  playerName: string;
  bid: number;
  tricksWon: number;
  bonusPoints: number;
}

export const computeTotalScores = (players: string[], rounds: any[]) => {
  return players.map((player) => {
    return rounds.reduce((totalScore, round) => {
      const playerData = round.playerData.find(
        (data) => data.playerName === player
      );
      if (playerData) {
        totalScore +=
          playerData.tricksWon - playerData.bid + playerData.bonusPoints;
      }
      return totalScore;
    }, 0); // Initial score is 0
  });
};

export const calculateNewScores = (
  players: string[],
  roundBid: number[],
  roundTricksWon: number[],
  bonusPoints: number[],
  roundNumber: number
) => {
  return players.map((player, index) => {
    const bid = roundBid[index];
    const tricks = roundTricksWon[index];
    const bonus = bonusPoints[index];

    let score = 0;
    if (bid === 0) {
      if (tricks === 0) {
        score = roundNumber * 10 + bonus; // successful 0 bid
      } else {
        score = roundNumber * -10; // failed 0 bid
      }
    } else {
      // Regular bid
      if (bid === tricks) {
        score = bid * 10 + bonus; // Bid met with bonus points
      } else {
        score = bid * -10; // Failed bid
      }
    }
    return {
      playerName: player,
      bid: bid,
      tricksWon: tricks,
      bonusPoints: bonus,
      score: score, // Add the calculated score to the player object
    };
  });
};
