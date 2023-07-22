import React from "react";

export function LineUpPlayer({ pos, num, player, isHovered }) {
  return (
    <div
      className={`lineup-player lineup-player${num} ${isHovered && " hover"}`}
    >
      {player ? (
        <img src={player.photo} alt={player["name_short"]} />
      ) : (
        <img src="/assets/default-image.jpg" alt="default" />
      )}
      <p>
        {pos}
        {player && `: ${player["name_short"]}`}
      </p>
    </div>
  );
}
