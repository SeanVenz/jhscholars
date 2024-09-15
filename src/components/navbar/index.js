import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import "./index.scss";
import jhLogo from "../../images/jhlogo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" exact>
          <img src={jhLogo} alt="Brand" />
        </NavLink>
      </div>
      <div
        className={`navbar-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="burger"></div>
        <div className="burger"></div>
        <div className="burger"></div>
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/scholars" activeClassName="active">
            Scholars
          </NavLink>
        </li>
        <li>
          <NavLink to="/join" activeClassName="active">
            Join
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
