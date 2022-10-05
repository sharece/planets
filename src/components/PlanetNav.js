import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { planetInfo } from "../planetInfo";
import "./styles/style.css";

export const PlanetNav = ({ setView }) => {
  const [open, setOpen] = useState(false);

  function handleLinkClick(planet) {
    setView(planet);
    // console.log(planet.name);
    if (open) {
      setOpen(false);
    }
  }
  function handleHamMenuClick() {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }
  return (
    <header>
      <div className="the-planets-and-nav">
        <div className="nav-container">
          <h2 className="the-planets">THE PLANETS</h2>
        </div>
        <li className="nav-planets">
          <Link to="/mercury">Mercury </Link>
          <Link to="/venus">Venus</Link>
          <Link to="/earth">Earth</Link>
          <Link to="/mars">Mars</Link>
          <Link to="/jupiter">Jupiter</Link>
          <Link to="/saturn">Saturn</Link>
          <Link to="/uranus">Uranus</Link>
          <Link to="/neptune">Neptune</Link>
        </li>
      </div>
      <ul className={open ? "ham-links active" : "ham-links"}>
        {planetInfo.map((disp) => (
          <li
            className="ham-link"
            onClick={() => handleLinkClick(disp)}
            key={disp.name}
          >
            {disp.name}
          </li>
        ))}
      </ul>
      <div
        className={open ? "ham-head active" : "ham-head"}
        onClick={() => handleHamMenuClick()}
      >
        <img
          src="../assets/hamburger.svg"
          className="ham-icon"
          alt="hamburger icon"
        />
      </div>
    </header>
  );
};
