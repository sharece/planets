import { useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import { Buttons } from "./Buttons";
import { PlanetNav } from "./PlanetNav";
import { Stats } from "./Stats";
import { planetInfo } from "../planetInfo";
import { Images } from "./Images";
import { InfoPlanet } from "./InfoPlanet";

export const PlanetPage = () => {
  const { planetName } = useParams();
  const [planet, setPlanet] = useState(null);
  const [view, setView] = useState("overview");

  // useEffect(() => {
  //   planetInfo.find();
  // }, [planetName]);
  //find name

  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/planets?name=${planetName}`, {
      headers: {
        "X-Api-Key": "oahemE61WrcFHdetH76xrg==sBsAa1QB8FsOEbHE",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setPlanet(data[0]))
      .catch((err) => console.error(err));
  }, [planetName]);

  return !planet ? null : (
    <>
      {" "}
      <div>
        <PlanetNav />
        <Images view={view} planet={planet} />
        <Buttons setView={setView} />
        <InfoPlanet planet={planet} view={view} />
        <Stats planet={planet} /> <Outlet />
      </div>
    </>
  );
};
