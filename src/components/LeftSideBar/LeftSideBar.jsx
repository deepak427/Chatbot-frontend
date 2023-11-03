import { NavLink } from "react-router-dom";
import "./LeftSideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faHome,
  faMoneyBill,
  faPerson,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const LeftSideBar = () => {
  return (
    <nav className="side-nav">
      <div className="side-nav-logo">
        <h2 style={{ padding: "1.5rem" }}>Raj Bhawan</h2>
        <FontAwesomeIcon
          style={{ padding: "0.5rem" }}
          icon={faAngleDoubleRight}
        />
      </div>
      <div className="side-sections">
        <NavLink to="/" className="side-nav-links" activeclass="active">
          <FontAwesomeIcon style={{ padding: "1rem" }} icon={faHome} />
          <p>Home</p>
        </NavLink>
        <NavLink to={"/speeches"} className="side-nav-links" activeclass="active">
          <FontAwesomeIcon style={{ padding: "1rem" }} icon={faMoneyBill} />
          <p>Speeches</p>
        </NavLink>
        <NavLink
          to="/chatbot"
          className="side-nav-links"
          activeclass="active"
        >
          <FontAwesomeIcon style={{ padding: "1rem" }} icon={faUserGroup} />
          <p>Chatbot</p>
        </NavLink>
        <NavLink
          to="/adminLogin"
          className="side-nav-links find-friends"
          activeclass="active"
        >
          <FontAwesomeIcon style={{ padding: "1rem" }} icon={faPerson} />
          <p>Admin Login</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default LeftSideBar;
