import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Popup from "../../components/Popup/Popup.jsx";
import DeletePopup from "../DeletePopup/DeletePopup.jsx";
import "./VideoBox.css";

const VideoBox = (props) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleLinkClick = () => {
    setShowPopup(!showPopup);
  };

  const handleLinkClickDelete = () => {
    setShowDeletePopup(!showDeletePopup);
  };

  return (
    <div className="box-main">
      <Link to="#popup" className="reason-link">
        <div className="box-image-container">
          {props.status === "completed" ? (
            <>
              <img
                style={{ cursor: "pointer" }}
                onClick={handleLinkClick}
                src={props.srcImage}
                alt="thumbnail"
              />
              <div className="video-details">
                <div
                  className="bottom-box"
                  style={{
                    padding: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <p style={{ textAlign: "center", fontWeight: "600" }}>
                    {props.title}
                  </p>
                  {localStorage.getItem("Token") && (
                    <svg
                      style={{
                        margin: "0 0.5rem 0 auto",
                        fill: "black",
                        cursor: "pointer",
                      }}
                      onClick={handleLinkClickDelete}
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="14"
                      viewBox="0 0 448 512"
                    >
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              <img src="images/spinner.gif" alt="thumbnail" />
              <div style={{ padding: "0.5rem" }} className="video-details">
                <p style={{ textAlign: "center", fontWeight: "600" }}>
                  Processing..... <br /> It may take 10 to 15 minutes
                </p>
              </div>
            </>
          )}
        </div>
      </Link>
      {showPopup && <Popup onClose={handleLinkClick} src={props.srcVideo} />}
      {showDeletePopup && (
        <DeletePopup
          onClose={handleLinkClickDelete}
          videoId={props.videoId}
          fetchData={props.fetchData}
        />
      )}
    </div>
  );
};

export default VideoBox;
