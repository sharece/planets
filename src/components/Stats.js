export const Stats = ({ planet }) => {
  return !planet ? null : (
    <div className="stat-container">
      <h2 className="stat-title">Mass</h2>
      <h1 className="stat-data">{planet?.mass}</h1>
      <h2 className="stat-title">Revolution Time</h2>
      <h1 className="stat-data">{planet?.period} Days</h1>
      <h2 className="stat-title">Radius</h2>
      <h1 className="stat-data">{planet?.radius}</h1>
      {""}
      <h2 className="stat-title">Average Temp</h2>
      <h1 className="stat-data">{planet?.temperature}</h1>
    </div>
  );
};
//Rotation Time:
//Revolution Time:
//Radius:
//Average Temp:
