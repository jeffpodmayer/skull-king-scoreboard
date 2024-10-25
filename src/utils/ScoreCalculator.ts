interface Round {
  roundNumber: number;
  scores: number[];
}

export const computeTotalScores = (players: string[], rounds: Round[]) => {
  return players.map((_, playerIndex) => {
    return rounds.reduce((totalScore, round) => {
      return totalScore + round.scores[playerIndex];
    }, 0);
  });
};

export const calculateNewScores = (
  players: string[],
  roundBid: number[],
  roundTricksWon: number[],
  bonusPoints: number[],
  roundNumber: number
) => {
  return players.map((_, index) => {
    const bid = roundBid[index];
    const tricks = roundTricksWon[index];
    const bonus = bonusPoints[index];

    let score = 0;
    if (bid === 0) {
      if (tricks === 0) {
        score = roundNumber * 10; // successful 0 bid
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
    return score;
  });
};
