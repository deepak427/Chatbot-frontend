import React from "react";
import { Link } from "react-router-dom";
import "./FooterMain.css";

const FooterMain = () => {
  return (
    <div className="footer">
<footer>
      <nav>
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/terms">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/refund">Cancel and Refund Policy</Link>
          </li>
        </ul>
      </nav>
    </footer>
    </div>
  );
};

export default FooterMain;
