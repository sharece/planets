// import { PlanetPage } from "./PlanetPage";

export const Images = ({ planet, view }) => {
  if (view === "overview") {
    return (
      <div className="img-container">
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
      <div className="img-container">
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
      <div className="img-container">
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
      //position relative + max width - 100% overview img
      // surface position absolute
      // addd percentage to surface
    );
  }
};
