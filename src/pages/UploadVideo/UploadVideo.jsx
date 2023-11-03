import React from "react";
import { useState } from "react";
import * as api from "../../api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UploadVideo.css";

const UploadVideo = () => {
  const [title, setTitle] = useState("");
  const [speech, setSpeech] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("Token")) {
      navigate("/");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !speech) {
        alert("Enter title and speech");
        return;
      }

    api.UploadVideo({
      title,
      speech,
    });
    setTitle("")
    setSpeech("")
    alert("Video will be updated on speech section after 5 minutes");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setSpeech(speech + "\n");
    }
  };

  return (
    <div className="ask-question">
      <div className="ask-ques-container">
        <div className="ask-question-header">
          <h1>Convert text to video</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>Enter your video title here</p>
              <input
                type="text"
                id="ask-ques-title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Speech</h4>
              <p>Enter speech here. Speech should be small</p>
              <textarea
                id="ask-ques-body"
                onChange={(e) => {
                  setSpeech(e.target.value);
                }}
                value={speech}
                cols="30"
                rows="10"
                onKeyPress={handleEnter}
              ></textarea>
            </label>
          </div>
          <div className="bottom-div">
            <input type="submit" value="Upload video" className="review-btn" />
            <button type="button" onClick={() => {
                localStorage.removeItem("Token");
                navigate("/")
            }} className="logout-btn">
              Log Out
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadVideo;
