// src/Popup.js

import React from "react";
import "./Popup.css";

const Popup = ({ onClose, src }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <video controls style={{width: "40rem"}}>
          <source src={src} type="video/mp4" />
          Your browser does not support the html video tag.
        </video>
      </div>
    </div>
  );
};

export default Popup;
