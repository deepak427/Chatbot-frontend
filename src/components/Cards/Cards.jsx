import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              alt="Speeches"
              src="images/speech_governor.jpg"
              text="Speeches"
              path="/speeches"
            />
            <CardItem
              alt="Chatbot"
              src="images/chatbot.jpg"
              text="Chatbot"
              path="/chatbot"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
