import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Popup from "../../components/Popup/Popup.jsx";
import "./VideoBox.css";

const VideoBox = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleLinkClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="box-main">
      <Link to="#popup" className="reason-link" onClick={handleLinkClick}>
        <div className="box-image-container">
          {props.status === "completed" ? (
            <img src={props.srcImage} alt="thumbnail" />
          ) : (
            <img src="images/spinner.gif" alt="thumbnail" />
          )}
        </div>
        <div className="video-details">
          <p>{props.title}</p>
        </div>
      </Link>
      {showPopup && <Popup onClose={handleLinkClick} src={props.srcVideo} />}
    </div>
  );
};

export default VideoBox;
