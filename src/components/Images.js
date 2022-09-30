import { PlanetPage } from "./PlanetPage";

export const Images = ({ planet, view }) => {
  if (view === "overview") {
    return (
      <div>
        <img
          src={`/assets/planet-${planet.name}.svg`}
          alt={`${planet.name}`}
          className="img"
        />
      </div>
    );
  }

  if (view === "structure") {
    return (
      <div>
        <img
          src={`/assets/planet-${planet.name}-internal.svg`}
          alt={`${planet.name}`}
          className="img"
        />
      </div>
    );
  }
  if (view === "geology") {
    return (
      <div>
        <img
          src={`/assets/planet-${planet.name}.svg`}
          alt={`${planet.name}`}
          className="img"
        />
        <img
          className="surface-img"
          src={`/assets/geology-${planet.name}.png`}
          alt={`-`}
        />
      </div>
    );
  }
};
