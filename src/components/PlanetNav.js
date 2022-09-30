import { Link } from "react-router-dom";

export function PlanetNav() {
  return (
    <>
      <div class="nav-container">
        <h2 class="the-planets">THE PLANETS</h2>
        <li class="nav-planets">
          <Link to="/mercury">Mercury </Link>
          <Link to="/venus">Venus</Link>
          <Link to="/earth">Earth</Link>
          <Link to="/mars">Mars</Link>
          <Link to="/jupiter">Jupiter</Link>
          <Link to="/saturn">Saturn</Link>
          <Link to="/uranus">Uranus</Link>
          <Link to="/neptune">Neptune</Link>
        </li>
      </div>
    </>
  );
}
