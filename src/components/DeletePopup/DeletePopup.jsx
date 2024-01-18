import React from "react";
import "./DeletePopup.css";
import * as api from "../../api";

const DeletePopup = ({ onClose, videoId, fetchData }) => {
  return (
    <div className="popup-delete">
      <div className="popup-content-delete">
        <h2>Are you sure?</h2>
        <button
          onClick={async () => {
            await api.deleteVideo({
              videoId: videoId,
            });
            fetchData();
            onClose();
          }}
          className="button-3 yes"
          role="button"
        >
          Yes
        </button>
        <button onClick={onClose} className="button-3 no" role="button">
          No
        </button>
      </div>
    </div>
  );
};

export default DeletePopup;
