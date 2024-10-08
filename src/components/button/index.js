import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

function Button({ link, text }) {
  const handleClick = () => {
    window.open(
      "https://app.axieinfinity.com/profile/0x2ea79d25502280b9fa4809fa424c8a8501a454b6/axies/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return link ? (
    <Link to="/scholars">
      <button className="animated-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="arr-2"
          viewBox="0 0 24 24"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
        <span className="text">{text}</span>
        <span className="circle"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="arr-1"
          viewBox="0 0 24 24"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </button>
    </Link>
  ) : (
    <button className="animated-button" onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="arr-2"
        viewBox="0 0 24 24"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
      <span className="text">{text}</span>
      <span className="circle"></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="arr-1"
        viewBox="0 0 24 24"
      >
        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
      </svg>
    </button>
  );
}

export default Button;
