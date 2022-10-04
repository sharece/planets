import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { planetInfo } from "../planetInfo";
import { PlanetPage } from "./PlanetPage";
import "./styles/style.css";

export const PlanetNav = ({ setView, setPlanet }) => {
  const [open, setOpen] = useState(false);

  function handleLinkClick(planet) {
    setPlanet(planet);
    // console.log(planet.name);
    if (open) {
      setOpen(false);
    }
  }
  function handleHamburgerClick() {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }
  return (
    <>
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
          {planetInfo.map((hc) => (
            <li
              className="ham-link"
              onClick={() => handleLinkClick(hc)}
              key={hc.name}
            >
              {hc.name}
            </li>
          ))}
        </ul>
        <div
          className={open ? "ham-head active" : "ham-head"}
          onClick={() => handleHamburgerClick()}
        >
          {/* insert working hamburger icon here */}
        </div>
      </header>

      {/* <div className="mobile-buttons">
        <button onClick={() => setView("overview")}>Overview</button>
        <button onClick={() => setView("structure")}>Internal Structure</button>
        <button onClick={() => setView("geology")}>Surface Geology</button>
      </div> */}
    </>
  );
};
