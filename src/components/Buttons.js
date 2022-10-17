import { useState, useEffect } from "react";
import { planetInfo } from "../planetInfo";

export const Buttons = ({ setView }) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    setStatus(planetInfo[0]?.[status]?.content || "Info not found");
  }, [status]);

  return (
    <div className="button-container">
      <div className="buttons">
        <button onClick={() => setView("overview")}>
          <span>01</span>Overview
        </button>
        <button onClick={() => setView("structure")}>
          <span>02</span>Internal Structure
        </button>
        <button onClick={() => setView("geology")}>
          <span>03</span>Surface Geology
        </button>
      </div>
    </div>
  );
};
