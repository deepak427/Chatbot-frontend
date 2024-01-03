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
            <>
              <img src={props.srcImage} alt="thumbnail" />
              <div className="video-details">
                <p style={{textAlign: "center", fontWeight: "600"}} >{props.title}</p>
              </div>
            </>
          ) : (
            <>
              <img src="images/spinner.gif" alt="thumbnail" />
              <div className="video-details">
                <p style={{textAlign: "center", fontWeight: "600"}} >Processing..... <br/> It may take few minutes to hours</p>
              </div>
            </>
          )}
        </div>
      </Link>
      {showPopup && <Popup onClose={handleLinkClick} src={props.srcVideo} />}
    </div>
  );
};

export default VideoBox;
