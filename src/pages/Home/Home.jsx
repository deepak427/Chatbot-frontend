import React from "react";
import governorPrimeminister from "../../assets/governor-primeminister.jpg";
import Cards from "../../components/Cards/Cards";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-main">
      <img src={governorPrimeminister} alt="governor-primeminister" className="homepage-image" />
      <Cards />
    </div>
  );
};

export default Home;
