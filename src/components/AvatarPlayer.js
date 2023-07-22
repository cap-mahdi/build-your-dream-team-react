import React from "react";
import { getCountryCode } from "./Player";

export function AvatarPlayer({ p, onHover, onLeave, onRemove }) {
  let { pos, player } = p;
  player = player || {
    name: "",
    rating: "",
    photo: "/assets/default-image.jpg",
  };
  return (
    <div
      className="avatar-player"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {player.name && (
        <img
          className="cross"
          src="/assets/cross.png"
          alt="cross"
          onClick={() => onRemove(player.id)}
        />
      )}

      <img
        className="avatar-player-image"
        src={player.photo}
        alt={player.name}
      />
      <div className="player-info">
        <p>
          {player.name}
          {player.name && (
            <img
              src={`https://flagcdn.com/48x36/${getCountryCode(
                player["nationality_code"]
              )}.png`}
              alt={player.flag}
            />
          )}
        </p>
        <p>
          {player.rating && `${player.rating} Rating | `}
          {pos}
        </p>
      </div>
    </div>
  );
}
