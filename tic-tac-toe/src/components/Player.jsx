import { useState } from "react";
export default function Player({ initialName, symbol, isActive }) {
  let [playerName, setPlayerName] = useState(initialName);
  let [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !isEditing);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  // let btnCaption = "Edit";
  let editablePlayerName = <span className="player-game">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
