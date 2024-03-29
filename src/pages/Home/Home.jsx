import React from "react";
import governorPrimeminister from "../../assets/governor-primeminister.jpg";
import Cards from "../../components/Cards/Cards";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import FooterMain from "../../components/Footer/FooterMain";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-main">
      <img
        src={governorPrimeminister}
        alt="governor-primeminister"
        className="homepage-image"
      />
      <Cards />
      <img
        onClick={() => {
          navigate("/chatbot");
        }}
        style={{
          top: "80vh",
          right: "2rem",
          position: "fixed",
          zIndex: "4",
          height: "8rem",
          cursor: "pointer"
        }}
        src="images/bot.gif"
        alt=""
      />

      <FooterMain />
    </div>
  );
};

export default Home;
