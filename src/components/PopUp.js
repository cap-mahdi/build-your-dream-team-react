import React, { useRef } from "react";

export function PopUp({ children, onCancel }) {
  const popUpElt = useRef(null);
  function handleClick(e) {
    if (e.target === popUpElt.current) {
      onCancel();
    }
  }

  return (
    <div className="popup" ref={popUpElt} onClick={handleClick}>
      <div className="popup-content">{children}</div>
    </div>
  );
}
