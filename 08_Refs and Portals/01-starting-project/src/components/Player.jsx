import React, { useState, useRef } from "react";

export default function Player() {
  const playerNameRef = useRef();
  const [playerName, setPlayerName] = useState("unknown entity");

  function onSubmit() {
    setPlayerName(playerNameRef.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "Unknown"}</h2>
      <p>
        <input ref={playerNameRef} type="text" />
        <button onClick={() => onSubmit()}>Set Name</button>
      </p>
    </section>
  );
}
