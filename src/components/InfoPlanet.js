import React from "react";
import { planetInfo } from "../planetInfo";
import { PlanetPage } from "./PlanetPage";
import { useEffect, useState } from "react";

export const InfoPlanet = ({ planet, view }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const data = planetInfo.find((pi) => {
      return pi.name === planet.name;
    });
    setText(data?.[view].content || "Info not found");
  }, [view, planet]);

  return (
    <div>
      <h1 className="planet-name">{planet.name}</h1>
      <div className="planet-text">{text}</div>
    </div>
  );
};
