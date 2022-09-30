import { useState, useEffect } from "react";
import { planetInfo } from "../planetInfo";

export const Buttons = ({ setView }) => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    setStatus(planetInfo[0]?.[status]?.content || "Info not found");
  }, [status]);

  return (
    <div className="buttons">
      <button onClick={() => setView("overview")}>Overview</button>
      <button onClick={() => setView("structure")}>Internal Structure</button>
      <button onClick={() => setView("geology")}>Surface Geology</button>
    </div>
  );
};
