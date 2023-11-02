import React from "react";
import nainitalImage from "../../assets/nainital.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-main">
      <img src={nainitalImage} alt="nainital" className="homepage-image" />
      <div className="overlay">
        <h4>Raj Bhavan:</h4>
        <p>
          The second Raj Bhavan or Governor's House of Uttarakhand is located in
          Nainital, it is the summer retreat of the governor of Uttarakhand. In
          the pre-Independence era, Nainital served as the summer capital of
          United Provinces and this building, built like a Scottish castle was
          christened as the "Government House".
        </p>
      </div>
    </div>
  );
};

export default Home;
