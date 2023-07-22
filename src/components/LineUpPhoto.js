import React from "react";

export function LineUpPhoto({ children }) {
  return (
    <div className="lineup-photo">
      <img src="/assets/football-staduim.jpg" alt="football staduim" />
      {children}
    </div>
  );
}
