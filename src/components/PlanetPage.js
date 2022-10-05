import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Buttons } from "./Buttons";
import { PlanetNav } from "./PlanetNav";
import { Stats } from "./Stats";
import { planetInfo } from "../planetInfo";
import { Images } from "./Images";
import { InfoPlanet } from "./InfoPlanet";
import { MobileButtons } from "./MobileButtons";

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
      <div className="planet-page-container">
        <PlanetNav />
        <MobileButtons setView={setView} />
        <div className="img-btn-info">
          <Images view={view} planet={planet} />
          <div className="button-and-text">
            <Buttons setView={setView} />
            <InfoPlanet planet={planet} view={view} />
          </div>
        </div>
        <Stats planet={planet} />
      </div>
    </>
  );
};
