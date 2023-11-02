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
        <div
          className="governor-logo"
        >
          <img src={ltGenGurmitSingh} alt="ltGenGurmitSingh" />
        </div>
      </Link>
      <Link to="/" className="nav-item nav-btn about">
        About
      </Link>
      <Link to="/" className="nav-item nav-btn products">
        Speeches
      </Link>
      <Link to="/chatbot" className="nav-item nav-btn forTeams">
        ChatBot
      </Link>
      {user === null ? (
        <Link to="/" className="nav-item nav-links">
          Admin Login
        </Link>
      ) : (
        <>
          <button className="nav-item nav-links" onClick={handleLogOut}>
            Log out
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
