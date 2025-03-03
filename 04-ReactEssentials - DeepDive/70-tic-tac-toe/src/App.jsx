import Player from "./Components/Player";
import "./index.css";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X"></Player>
          <Player name="Player 2" symbol="O"></Player>
        </ol>
        Game Board
      </div>
      LOG
    </main>
  );
}

export default App;
