import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import jhLogo from "../../images/jhlogo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={jhLogo} alt="Brand" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/scholars">Scholars</Link>
        </li>
        <li>
          <Link to="/join">Join</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
