import { PlayerList } from "./components/PlayerList/PlayerList";
import { RoundTracker } from "./components/RoundTracker/RoundTracker";
import { Scoreboard } from "./components/Scoreboard/Scoreboard";
import { Hero } from "./components/Hero/Hero";

import "./App.css";

function App() {
  return (
    <div>
      <Hero />
      <PlayerList />
      <RoundTracker
        roundNumber={1}
        roundBid={2}
        roundTricksWon={3}
        bonusPoints={20}
        roundScore={40}
      />
      <Scoreboard playerName="Jeff" round={1} roundScore={20} />
    </div>
  );
}

export default App;
