import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // Never use the inverse of the value just like that when playing around with states.
    // Use arrow function as it will be instant if done without arrow function it still works but will not be instant
    // with below example when run we expect no change in the edit button text, but that is not the behavior as the execution is not instant.
    setIsEditing(!isEditing);
    setIsEditing(!isEditing);

    if (isEditing) {
    }
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" value={name} required />;
  }

  return (
    <>
      <li>
        <span className="=player">
          {playerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
