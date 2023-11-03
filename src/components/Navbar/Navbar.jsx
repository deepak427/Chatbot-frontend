import { Link } from "react-router-dom";
import nationalEmblem from "../../assets/National-Emblem.jpg";
import ltGenGurmitSingh from "../../assets/lt-gen-gurmit-singh.jpg";
import "./Navbar.css";

const Navbar = () => {
  const user = null;

  return (
    <nav className="main-nav">
      {" "}
      <Link to="/" className="nav-front">
        <img
          className="national-emblem-logo"
          src={nationalEmblem}
          alt="National Emblem"
        />
        <div className="governor-label">
          <h2> Lt Gen Gurmit Singh</h2>
          <h4> PVSM, UYSM, AVSM, VSM (Retd) </h4>
          <h4> Governor of Uttarakhand</h4>
        </div>
        <div className="governor-logo">
          <img src={ltGenGurmitSingh} alt="ltGenGurmitSingh" />
        </div>
      </Link>
      <div className="sections">
        <Link to="/" className="nav-item nav-btn about">
          Home
        </Link>
        <Link to="/speeches" className="nav-item nav-btn products">
          Speeches
        </Link>
        <Link to="/chatbot" className="nav-item nav-btn forTeams">
          ChatBot
        </Link>
        <Link to="/adminLogin" className="nav-item nav-links">
          Admin
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
