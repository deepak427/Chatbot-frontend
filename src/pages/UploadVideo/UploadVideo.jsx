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

    const wordLimit = 70;
    const words = speech.split(/\s+/);

    const formattedspeech = words.reduce((result, word, index) => {
      result += word + " ";
      if ((index + 1) % wordLimit === 0) {
        result += "\n\n";
      }
      return result;
    }, "");

    api.UploadVideo({
      title,
      speech: formattedspeech,
    });
    setTitle("");
    setSpeech("");
    alert(
      "The Video will be updated on speech section in about 10 to 15 minutes."
    );
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
              <p>Enter speech here.</p>
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
            <button
              type="button"
              onClick={() => {
                localStorage.removeItem("Token");
                navigate("/");
              }}
              className="logout-btn"
            >
              Log Out
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadVideo;
