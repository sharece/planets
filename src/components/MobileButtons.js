import { useState, useEffect } from "react";
import { planetInfo } from "../planetInfo";

export const MobileButtons = ({ setView }) => {
  const [status1, setStatus1] = useState("");

  useEffect(() => {
    setStatus1(planetInfo[0]?.[status1]?.content || "Info not found");
  }, [status1]);

  return (
    <div className="mobile-button-container">
      <div className="mobile-buttons">
        <a className="emb" onClick={() => setView("overview")}>
          Overview
        </a>
        <a className="emb" onClick={() => setView("structure")}>
          Internal Structure
        </a>
        <a className="emb" onClick={() => setView("geology")}>
          Surface Geology
        </a>
      </div>
    </div>
  );
};
