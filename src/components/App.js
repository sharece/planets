import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { PlanetPage } from "./PlanetPage";
import "./styles/style.css";
export const App = () => {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate to="mercury" />} />
          <Route path="/:planetName:status" element={<PlanetPage />} />
        </Routes>
      </div>
    </>
  );
};
