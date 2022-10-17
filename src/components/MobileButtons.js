import { useState, useEffect } from "react";
import { planetInfo } from "../planetInfo";
// import { setView } from "./PlanetPage";

export const MobileButtons = ({ setView }) => {
  const [status1, setStatus1] = useState("");

  useEffect(() => {
    setStatus1(planetInfo[0]?.[status1]?.content || "Info not found");
  }, [status1]);

  return (
    <div className="mobile-button-container">
      <div className="mobile-buttons">
        <p className="emb" onClick={() => setView("overview")}>
          Overview
        </p>
        <p className="emb" onClick={() => setView("structure")}>
          Structure
        </p>
        <p className="emb" onClick={() => setView("geology")}>
          Surface
        </p>
      </div>
    </div>
  );
};
