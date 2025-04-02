import React, { useState, useContext } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("unknown entity");
  const [submitted, setSubmitted] = useState(false);

  function handleNameChange(event) {
    setPlayerName(event.target.value);
    setSubmitted(false);
  }
  function onSubmit() {
    setSubmitted(true);
  }
  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : "Unknown"}</h2>
      <p>
        <input type="text" onChange={handleNameChange} value={playerName} />
        <button onClick={() => onSubmit()}>Set Name</button>
      </p>
    </section>
  );
}
