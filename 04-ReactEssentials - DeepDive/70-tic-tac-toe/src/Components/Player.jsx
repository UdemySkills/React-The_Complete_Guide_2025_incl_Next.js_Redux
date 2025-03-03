import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing); //Using the set state to toggle this way 'Arrow Function' will make the cahnge instant.
    setIsEditing((editing) => !editing); // due to double toggle being instant we see the edit button text stays same and doesnt change to save at all.
    if (isEditing) {
    }
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing) {
    playerName = <input type="text" required />;
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
