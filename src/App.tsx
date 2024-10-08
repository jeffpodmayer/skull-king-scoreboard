import { PlayerList } from "./components/PlayerList/PlayerList";
import { RoundTracker } from "./components/RoundTracker/RoundTracker";
// import { Scoreboard } from "./components/Scoreboard/Scoreboard";

import "./App.css";

function App() {
  return (
    <div>
      <PlayerList />
      <RoundTracker roundNumber={1} />
      {/* <Scoreboard /> */}
    </div>
  );
}

export default App;
