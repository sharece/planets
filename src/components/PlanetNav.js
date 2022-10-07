import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { planetInfo } from "../planetInfo";
// import { PlanetPage } from "./PlanetPage";
import "./styles/style.css";

export const PlanetNav = () => {
  const [open, setOpen] = useState(false);
  const [planet1, setPlanet1] = useState(null);
  // const [showMenu, setShowMenu] = useState(false);

  function handleLinkClick(planet1) {
    setPlanet1(planet1);
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
        <ul>
          <Link to="/mercury" className="ham-link">
            Mercury{" "}
          </Link>
          <Link to="/venus" className="ham-link">
            Venus
          </Link>
          <Link to="/earth" className="ham-link">
            Earth
          </Link>
          <Link to="/mars" className="ham-link">
            Mars
          </Link>
          <Link to="/jupiter" className="ham-link">
            Jupiter
          </Link>
          <Link to="/saturn" className="ham-link">
            Saturn
          </Link>
          <Link to="/uranus" className="ham-link">
            Uranus
          </Link>
          <Link to="/neptune" className="ham-link">
            Neptune
          </Link>
        </ul>
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
