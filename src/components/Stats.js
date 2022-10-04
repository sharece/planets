export const Stats = ({ planet }) => {
  return !planet ? null : (
    <footer>
      <div className="stat-container">
        <div className="stat-box">
          <h2 className="stat-title">Revolution Time</h2>
          <h1 className="stat-data">{planet?.period} Days</h1>
        </div>
        <div className="stat-box">
          <h2 className="stat-title">Revolution Time</h2>
          <h1 className="stat-data">{planet?.period} Days</h1>
        </div>
        <div className="stat-box">
          <h2 className="stat-title">Radius</h2>
          <h1 className="stat-data">
            {planet?.radius}
            KM
          </h1>
        </div>
        <div className="stat-box">
          <h2 className="stat-title">Average Temp</h2>
          <h1 className="stat-data">{planet?.temperature}K</h1>
        </div>
      </div>
    </footer>
  );
};
